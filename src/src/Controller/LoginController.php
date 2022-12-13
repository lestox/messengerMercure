<<<<<<< HEAD
<?php

namespace App\Controller;

use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

class LoginController extends AbstractController
{
    #[Route('/login', name: 'app_login', methods: ['POST'])]
    public function login(string $appSecret, UserInterface $user, JWTTokenManagerInterface $JWTManager): JsonResponse
    {
        if($user->isBeenBanned()){
            return new JsonResponse(['message' => 'You have been banned']);
        }

        return new JsonResponse(['token' => $JWTManager->create($user)]);
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout(): void
    {
        //
    }
}
=======
<?php

namespace App\Controller;

use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

class LoginController extends AbstractController
{
    #[Route('/login_check', name: 'app_login_check', methods: ['POST'])]
    public function login_check(string $appSecret, UserInterface $user, JWTTokenManagerInterface $JWTManager): Response
    {
        return new JsonResponse(['token' => $JWTManager->create($user)]);
    }

    #[Route('/logout', name: 'app_logout')]
    public function logout(): void
    {
        //
    }
}
>>>>>>> 35256268eabfd7fd6cc253ed2f6883354df2f918
