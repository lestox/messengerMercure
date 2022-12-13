<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Mercure\HubInterface;
use Psr\Log\LoggerInterface;



class MercureController extends AbstractController {

    #[Route('/mercure-publish', name: 'mercure-publish')]
    public function publish(HubInterface $hub, Request $request, LoggerInterface $logger) : JsonResponse
    {
        //$logger->critical($request->getContent());
        $message = json_decode($request->getContent(), true);
        if ($message == ''){
            $message['message'] = 'premier message !';
        }

        $update = new Update(
            ["https://example.com/my-private-topic"],
            json_encode(["message" => $message['message']])
        );

        $hub->publish($update);

        return $this->json($message);
    }
}



