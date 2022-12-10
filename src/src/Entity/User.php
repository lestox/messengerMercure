<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity('Email', 'Cet email est déjà utilisé')]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'id', type: 'integer')]
    private ?int $id_user = null;

    #[ORM\Column(length: 30)]
    #[Groups(['user:read'])]
    private ?string $first_name = null;

    #[ORM\Column(length: 30, nullable: true)]
    #[Groups(['user:read'])]
    private ?string $last_name = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = ["ROLE_USER"];

    /**
     * @var string The hashed password
     */
    #[ORM\Column(length: 255)]
    private string $password;

    #[ORM\Column(length: 500, nullable: true)]
    #[Groups(['user:read'])]
    private ?string $photo = null;

    #[ORM\Column(type: 'datetime')]
    private \DateTimeInterface $created_at;

    #[ORM\Column(type: 'datetime')]
    private \DateTimeInterface $updated_at;

    #[ORM\Column(type: 'datetime')]
    private \DateTimeInterface $last_connected_at;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $deleted_at = null;

    #[ORM\Column(type: 'boolean')]
    private bool $dark_mode = false;

    #[ORM\Column(type: 'boolean')]
    private bool $been_banned = false;

    #[ORM\OneToMany(mappedBy: 'user' , targetEntity: Message::class)]
    private Collection $messages_sent;

    #[ORM\OneToMany(mappedBy: 'users', targetEntity: Channel::class)]
    private Collection $channels;

    public function __construct()
    {
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();
        $this->last_connected_at = new \DateTime();
        $this->messages_sent = new ArrayCollection();
        $this->channels = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id_user;
    }

    /**
     * @param int|null $id_user
     */
    public function setIdUser(?int $id_user): void
    {
        $this->id_user = $id_user;
    }

    /**
     * @return string|null
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string|null $email
     */
    public function setEmail(?string $email): void
    {
        $this->email = $email;
    }

    /**
     * @return string|null
     */
    public function getFirstName(): ?string
    {
        return $this->first_name;
    }

    /**
     * @param string|null $first_name
     * @return User
     */
    /**
     * @param string|null $first_name
     */
    public function setFirstName(?string $first_name): void
    {
        $this->first_name = $first_name;
    }

    /**
     * @return string|null
     */
    public function getLastName(): ?string
    {
        return $this->last_name;
    }

    /**
     * @param string|null $last_name
     */
    public function setLastName(?string $last_name): void
    {
        $this->last_name = $last_name;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    /**
     * @param string|null $photo
     */
    public function setPhoto(?string $photo): void
    {
        $this->photo = $photo;
    }

    /**
     * @return \DateTimeInterface
     */
    public function getCreatedAt(): \DateTimeInterface
    {
        return $this->created_at;
    }

    /**
     * @param \DateTimeInterface $created_at
     */
    public function setCreatedAt(\DateTimeInterface $created_at): void
    {
        $this->created_at = $created_at;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getDeletedAt(): ?\DateTimeInterface
    {
        return $this->deleted_at;
    }

    /**
     * @param \DateTimeInterface|null $deleted_at
     */
    public function setDeletedAt(?\DateTimeInterface $deleted_at): void
    {
        $this->deleted_at = $deleted_at;
    }

    /**
     * @return int|null
     */
    public function getIdUser(): ?int
    {
        return $this->id_user;
    }

    /**
     * @return \DateTimeInterface
     */
    public function getLastConnectedAt(): \DateTimeInterface
    {
        return $this->last_connected_at;
    }

    /**
     * @param \DateTimeInterface $last_connected_at
     */
    public function setLastConnectedAt(\DateTimeInterface $last_connected_at): void
    {
        $this->last_connected_at = $last_connected_at;
    }

    /**
     * @return ArrayCollection
     */
    public function getMessagesSent(): ArrayCollection
    {
        return $this->messages_sent;
    }

    /**
     * @param ArrayCollection $messages_sent
     */
    public function setMessagesSent(ArrayCollection $messages_sent): void
    {
        $this->messages_sent = $messages_sent;
    }

    /**
     * @return ArrayCollection
     */
    public function getChannel(): ArrayCollection
    {
        return $this->channels;
    }

    /**
     * @param ArrayCollection $channels
     */
    public function setChannel(ArrayCollection $channels): void
    {
        $this->channels = $channels;
    }

    /**
     * @return \DateTimeInterface
     */
    public function getUpdatedAt(): \DateTimeInterface
    {
        return $this->updated_at;
    }

    /**
     * @param \DateTimeInterface $updated_at
     */
    public function setUpdatedAt(\DateTimeInterface $updated_at): void
    {
        $this->updated_at = $updated_at;
    }

    /**
     * @return bool
     */
    public function isBeenBanned(): bool
    {
        return $this->been_banned;
    }

    /**
     * @param bool $been_banned
     */
    public function setBeenBanned(bool $been_banned): void
    {
        $this->been_banned = $been_banned;
    }

    /**
     * @return bool
     */
    public function isDarkMode(): bool
    {
        return $this->dark_mode;
    }

    /**
     * @param bool $dark_mode
     */
    public function setDarkMode(bool $dark_mode): void
    {
        $this->dark_mode = $dark_mode;
    }

    /**
     * @ORM\PrePersist
     */
    public function onPrePersist()
    {
        $this->created_at = new \DateTime("now");
    }

    /**
     * @ORM\PreUpdate
     */
    public function onPreUpdate()
    {
        $this->updated_at = new \DateTime("now");
    }

    public function eraseCredentials()
    {
        //
    }
}
