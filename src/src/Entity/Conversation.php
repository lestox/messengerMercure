<?php

namespace App\Entity;

use App\Repository\ConversationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConversationRepository::class)]
class Conversation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $last_message_id = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $users_id = [];

    #[ORM\Column]
    private ?\DateTimeImmutable $last_message_read_at = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLastMessageId(): ?int
    {
        return $this->last_message_id;
    }

    public function setLastMessageId(?int $last_message_id): self
    {
        $this->last_message_id = $last_message_id;

        return $this;
    }

    public function getUsersId(): array
    {
        return $this->users_id;
    }

    public function setUsersId(array $users_id): self
    {
        $this->users_id = $users_id;

        return $this;
    }

    public function getLastMessageReadAt(): ?\DateTimeImmutable
    {
        return $this->last_message_read_at;
    }

    public function setLastMessageReadAt(\DateTimeImmutable $last_message_read_at): self
    {
        $this->last_message_read_at = $last_message_read_at;

        return $this;
    }
}
