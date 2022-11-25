<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Mercure\HubInterface;


class MercureController extends AbstractController {

    #[Route('/mercure-publish', name: 'mercure-publish')]
    public function publish(HubInterface $hub) : JsonResponse
    {
        $update = new Update(
            ["https://example.com/my-private-topic"],
            json_encode(["message" => "Hello monde from symfony !"])
        );

        $hub->publish($update);

        return $this->json(["message" => "data published"]);
    }
}



