<?php

use Symfony\Component\HttpFoundation\Cookie;

class CookieHelper
{
    private JwtHelper $jwtHelper;

    public function __construct(JwtHelper $jwtHelper) {
        $this->jwtHelper = $jwtHelper;
    }

    public function buildCookie(): string
    {
        return Cookie::create(
            'mercureAuthorization',
            $this->jwtHelper->createJwt(),
            new \DateTime("10 minutes"),
            '/.well-known/mercure',
            'localhost',
            true,
            true,
            false,
            Cookie::SAMESITE_STRICT
        );
    }
}