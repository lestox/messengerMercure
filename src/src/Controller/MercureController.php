<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Mercure\HubInterface;


class MercureController extends AbstractController {

    function debug_to_console($data) {
        $output = $data;
        if (is_array($output))
            $output = implode(',', $output);

        echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
    }

    #[Route('/mercure-publish', name: 'mercure-publish')]
    public function publish(HubInterface $hub, Request $request) : JsonResponse
    {
        $message = json_decode($request->getContent(), true);
        $this->debug_to_console($message);
        if ($message == ''){
            $message = 'premier message !';
        }

        $update = new Update(
            ["https://example.com/my-private-topic"],
            json_encode(["message" => $message])
        );

        $hub->publish($update);

        return $this->json(["message" => "data published"]);
    }
}



