<?php

namespace App\Controller;

use App\Entity\Channel;
use App\Entity\Message;
use App\Entity\User;
use App\Repository\ChannelRepository;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

class ChannelController extends AbstractController
{
    #[Route('/channel', name: 'app_channel')]
    #[isGranted('ROLE_USER')]
    public function index(
        UserRepository $userRepository,
        ChannelRepository $channelRepository
    ): Response
    {
        /* @var User $user */
        $user = $this->getUser();
        $channels = $user->getChannel();
        $allUsers = $userRepository->findAllExceptConnectedUser($user);

        $model = [];
        foreach ($channels->getValues() as $key => $channel) {
            $model[$key] = [
                'id' => $channel->getId(),
                'id_channel' => $channel->getIdChannel(),
                'pic' => $channel->getPicChannel(),
                'name' => $channel->getName(),
            ];
        }

        return new JsonResponse([
            "all_users" => $allUsers,
            "my_channels" => $model,
        ]);
    }

    /**
     * @throws \Exception
     */
    #[Route('/channel/create', name: 'app_channel_create', methods: ['POST'])]
    #[isGranted('ROLE_USER')]
    public function createChannel(
        Request $request,
        UserInterface $userInterface,
        EntityManagerInterface $eMI
    ): Response
    {
        $data = $request->request;

        $name = $data->get('name');
        if (empty($name)) {
            $name = null;
        }
        $photo = $data->get('pic_channel');
        if (empty($photo)) {
            $photo = null;
        }
        if (!$data->get('users')) {
            return new JsonResponse(
                ['message' => 'Users required'],
                Response::HTTP_BAD_REQUEST
            );
        }

        $users = $data->get('users');
        $arrayUsers = json_decode($users, true);
        if (empty($arrayUsers)) {
            return new JsonResponse(
                ['message' => 'Users required'],
                Response::HTTP_BAD_REQUEST
            );
        }
        if ($photo==null && $name==null && count($arrayUsers)>1) {
            return new JsonResponse(
                ['message' => "DM can not be created"],
                Response::HTTP_BAD_REQUEST
            );
        }

        if (count($arrayUsers) > 0) {
            $string = random_bytes(10);
            $id_channel = bin2hex($string);
            $arrayCollectionUsers = new ArrayCollection($arrayUsers);

            $channel = new Channel();
            $channel->setName($name);
            $channel->setPicChannel($photo);
            foreach ($arrayCollectionUsers as $key => $value) {
                if (!is_int($value) || $value === $userInterface->getId()) {
                    return new JsonResponse(
                        ['message' => ' ('.$value.') is not a valid user'],
                        Response::HTTP_BAD_REQUEST
                    );
                }
                $user = $eMI->getRepository(User::class)->find($value);
                $channel->addUser($user);
            }
            $channel->addUser($userInterface);
            $channel->setIdChannel($id_channel);
            $channel->setAdminChannel($userInterface);

            $eMI->persist($channel);
            $eMI->flush();

            $inserted = $eMI->getRepository(Channel::class)->findOneBy(['id_channel' => $id_channel]);

            if ($inserted) {
                return $this->json([
                    'message' => $name.' ('.$id_channel.') channel been created',
                ], Response::HTTP_CREATED);
            } else {
                return $this->json([
                    'message' => 'Error during the creation of the user',
                ], Response::HTTP_BAD_GATEWAY);
            }
        }

        return new JsonResponse(['message' => 'Channel created']);
    }

    #[Route('/channel/{id_channel}', name: 'app_channel_show')]
    public function show($id_channel, EntityManagerInterface $eMI)
    {
        $channel = $eMI->getRepository(Channel::class)->findOneBy(['id_channel' => $id_channel]);
        $messages = $channel->getMessages()->getValues();
        foreach ($messages as $key => $value) {
            $messages[$key] = [
                'id' => $value->getId(),
                'content' => $value->getContent(),
                'date' => $value->getCreatedAt(),
                'user' => $value->getUser()->getFirstName().' '.$value->getUser()->getLastName(),
            ];
        }

        return new JsonResponse($messages);

    }

    #[Route('/channel/{id_channel}/message', name: 'app_channel_message', methods: ['POST'])]
    #[isGranted('ROLE_USER')]
    public function sendMessage(
        Request $request,
        EntityManagerInterface $eMI,
        ChannelRepository $channelRepository,
        $id_channel): Response
    {
        /** @var User $user */
        $user = $this->getUser();
        $channel = $eMI->getRepository(Channel::class)->findOneBy(['id_channel' => $id_channel]);
        if (!$channel) {
            return new JsonResponse(
                ['message' => 'Channel not found'],
                Response::HTTP_NOT_FOUND
            );
        }
        $model = [];
        foreach ($channel->getUsers()->getValues() as $users)
        {
            $model[] = $users->getId();
        }

            if (!in_array($user->getId(), $model)){
                return new JsonResponse(
                    ['message' => 'You are not in this channel'],
                    Response::HTTP_FORBIDDEN
                );
            }

        $data = $request->request;
        $messageContent = $data->get('message');
        if (empty($messageContent)) {
            return new JsonResponse(
                ['message' => 'Message required'],
                Response::HTTP_BAD_REQUEST
            );
        }

        // TODO: ghost feature

        $message = new Message();
        $message->setChannel($channel);
        $message->setUser($user);
        $message->setContent($messageContent);
        $eMI->persist($message);
        $eMI->flush();

        return new JsonResponse(['message' => 'Message sent']);
    }

}
