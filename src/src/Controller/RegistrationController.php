<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class RegistrationController extends AbstractController
{

    #[Route('/register', name: 'app_register', methods: ['POST'])]
    public function register(
        Request $request,
        UserPasswordHasherInterface $userPasswordHasher,
        EntityManagerInterface $entityManager,
    ): Response
    {
        $data = $request->request;
        $email = $data->get('email');
        $password = $data->get('password');
        $first_name = $data->get('first_name');
        $last_name = $data->get('last_name');
        $photo = $data->get('photo');

        $call_database = $entityManager->getRepository(User::class)->findOneBy(['email' => $email]);

        $user = $call_database;
        if ($user) {
            return $this->json([
                'message' => 'Email already exist',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = new User();
        $user->setEmail($email);
        $user->setPassword($userPasswordHasher->hashPassword($user, $password));
        $user->setFirstName($first_name);
        $user->setLastName($last_name);
        $user->setPhoto($photo);
        if (preg_match('/@admin.com$/', $email)) {
            $user->setRoles(['ROLE_ADMIN']);
        }

        $entityManager->persist($user);
        $entityManager->flush();

        $inserted = $entityManager->getRepository(User::class)->findOneBy(['email' => $email]);

        if ($inserted) {
            return $this->json([
                'message' => $first_name." ".$last_name.' user been created',
            ], Response::HTTP_CREATED);
        } else {
            return $this->json([
                'message' => 'Error during the creation of the user',
            ], Response::HTTP_BAD_GATEWAY);
        }

    }
}
