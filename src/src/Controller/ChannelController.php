<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ChannelController extends AbstractController
{
    #[Route('/channel', name: 'app_channel')]
    public function index(UserRepository $userRepository): Response
    {
        dd($userRepository->findAll());
    }

    #[Route('/channel/{id_channel}', name: 'app_channel_show')]
    public function show($id_channel): Response
    {
        return $this->render('channel/show.html.twig', [
            'controller_name' => 'ChannelController',
        ]);
    }
}
