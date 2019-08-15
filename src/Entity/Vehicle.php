<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\VehicleRepository")
 */
class Vehicle
{
    /** @ORM\Id
     *  @ORM\Column(type="integer")
     *  @ORM\GeneratedValue
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    private $brand;

    /**
     * @var string
     * @ORM\Column(type="decimal", precision=15, scale=2)
     */
    private $price;

    /**
     * @var string
     * @ORM\Column(type="integer", length=4)
     */
    private $year;

    /**
     * @var string
     * @ORM\Column(type="integer", length=4)
     */
    private $modelYear;

    /**
     * @var string
     * @ORM\Column(type="integer", length=10)
     */
    private $userId;

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
     * @var string
     * @ORM\Column(type="string", length=15)
     */
    private $city;

    /**
     * @return string
     */
    public function getCity(): string
    {
        return $this->city;
    }

    /**
     * @param string $city
     */
    public function setCity(string $city): void
    {
        $this->city = $city;
    }

    /**
     * @return string
     */
    public function getRegistrationDate(): string
    {
        return $this->registrationDate;
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
     * @param \DateTime $updateDate
     */
    public function setUpdateDate(\DateTime $updateDate): void
    {
        $this->updateDate = $updateDate;
    }

    /**
     * @return string
     */
    public function getUserId(): string
    {
        return $this->userId;
    }

    /**
     * @param string $userId
     */
    public function setUserId(string $userId): void
    {
        $this->userId = $userId;
    }

    /**
     * @return string
     */
    public function getPrice(): string
    {
        return $this->price;
    }

    /**
     * @param string $price
     */
    public function setPrice(string $price): void
    {
        $this->price = $price;
    }

    /**
     * @return string
     */
    public function getYear(): string
    {
        return $this->year;
    }

    /**
     * @param string $year
     */
    public function setYear(string $year): void
    {
        $this->year = $year;
    }

    /**
     * @return string
     */
    public function getModelYear(): string
    {
        return $this->modelYear;
    }

    /**
     * @param string $modelYear
     */
    public function setModelYear(string $modelYear): void
    {
        $this->modelYear = $modelYear;
    }

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    private $description;

    public function getId(): ?int {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getBrand()
    {
        return $this->brand;
    }

    /**
     * @param mixed $brand
     */
    public function setBrand($brand): void
    {
        $this->brand = $brand;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $nome
     */
    public function setDescription($description): void
    {
        $this->description = $description;
    }
}
