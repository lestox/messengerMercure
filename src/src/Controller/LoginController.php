<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login')]
    public function login(string $appSecret): Response
    {
        $user = $this->getUser();

        if ($user === null) {
            return $this->json([
                'message' => 'Missing credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $jwt = JWT::encode([
            'email' => $user->getEmail(),
            'id' => $user->getId(),
        ], $appSecret, 'HS256');

        return $this->json([
            'jwt_token' => $jwt,
        ]);
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout(): void
    {
        //
    }
}
