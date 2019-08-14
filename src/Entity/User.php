<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User implements UserInterface, \Serializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer", unique=true)
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $username;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     */
    private $mail;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @var string
     * @ORM\Column(type="string", length=15, nullable=true)
     */
    private $phone;

    /**
     * @var string
     * @ORM\Column(type="date", nullable=true)
     */
    private $dateOfBirth;

    /**
     * @var string
     * @ORM\Column(type="datetime", options={"dafault": "CURRENT_TIMESTAMP"})
     */
    private $registrationDate;

    /**
     * @var string
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updateDate;

    /**
     * @return string
     */
    public function getRegistrationDate(): string
    {
        return $this->registrationDate ? $this->registrationDate : new \DateTime('now');
    }

    /**
     * @param \DateTime $registrationDate
     */
    public function setRegistrationDate(\DateTime $registrationDate = null): void
    {
        $this->registrationDate = ($registrationDate ? $registrationDate : new \DateTime("now"));
    }

    /**
     * @return string
     */
    public function getUpdateDate(): string
    {
        return $this->updateDate;
    }

    /**
     * @param string $updateDate
     */
    public function setUpdateDate(string $updateDate): void
    {
        $this->updateDate = $updateDate;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getMail()
    {
        return ($this->mail ? $this->mail : '');
    }

    /**
     * @param string $mail
     */
    public function setMail(string $mail): void
    {
        $this->mail = $mail;
    }

    /**
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param string $password
     */
    public function setPassword(string $password): void
    {
        $this->password = $password;
    }

    /**
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * @param string $phone
     */
    public function setPhone(string $phone): void
    {
        $this->phone = $phone;
    }

    /**
     * @return string
     */
    public function getDateOfBirth()
    {
        return $this->dateOfBirth;
    }

    /**
     * @param string $dateOfBirth
     */
    public function setDateOfBirth(\DateTime $dateOfBirth): void
    {
        $this->dateOfBirth = $dateOfBirth;
    }


    public function getId(): ?int
    {
        return $this->id;
    }


    /**
     * @return mixed
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param mixed $username
     */
    public function setUsername($username): void
    {
        $this->username = $username;
    }


    public function getRoles() {
        return [
            'ROLE_USER'
        ];
    }

    public function getSalt() {
    }

    public function eraseCredentials() {
        // TODO: Implement eraseCredentials() method.
    }

    public function serialize() {
        return serialize([
            $this->id,
            $this->username,
            $this->mail,
            $this->password
        ]);
    }

    public function unserialize($serialized) {
        list (
            $this->id,
            $this->username,
            $this->mail,
            $this->password
        ) = unserialize($serialized, ['allowed_classes' => false]);
    }
}
