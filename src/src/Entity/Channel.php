<?php

namespace App\Entity;

use App\Repository\ChannelRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ChannelRepository::class)]
class Channel
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::GUID)]
    private ?string $id_channel = null;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'channel')]
    #[ORM\JoinColumn(name: 'id', referencedColumnName: 'id', nullable: false)]
    private ?User $users;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $pic_channel = null;

    #[ORM\OneToOne(cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $admin_channel;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdChannel(): ?string
    {
        return $this->id_channel;
    }

    public function setIdChannel(string $id_channel): self
    {
        $this->id_channel = $id_channel;

        return $this;
    }

    public function getUsers(): ?User
    {
        return $this->users;
    }

    public function setUsers(?User $users): self
    {
        $this->users = $users;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPicChannel(): ?string
    {
        return $this->pic_channel;
    }

    public function setPicChannel(?string $pic_channel): self
    {
        $this->pic_channel = $pic_channel;

        return $this;
    }

    public function getAdminChannel(): ?User
    {
        return $this->admin_channel;
    }

    public function setAdminChannel(User $admin_channel): self
    {
        $this->admin_channel = $admin_channel;

        return $this;
    }

    /**
     * @param int|null $id
     */
    public function setId(?int $id): void
    {
        $this->id = $id;
    }
}
