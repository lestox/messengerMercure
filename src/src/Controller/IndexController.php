<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(Security $security): Response
    {
        if (!$security->getUser()) {
            return $this->redirectToRoute('app_login');
        }
        return $this->redirectToRoute('app_channel');

    }
}
