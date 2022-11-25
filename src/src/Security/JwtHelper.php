<?php

use Firebase\JWT\JWT;

class JwtHelper {
    private string $mercureSecret;

    public function __construct(string $mercureSecret)
    {
        $this->mercureSecret = $mercureSecret;
    }

    public function createJwt(): string
    {
        return JWT::encode(
            ['mercure' => [
                'subscribe' => ['https://example.com/my-private-topic']
            ]],
            $this->mercureSecret,
            'HS256');
    }
}
