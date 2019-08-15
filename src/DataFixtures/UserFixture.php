<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixture extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setUsername('admin');

        $user->setPassword(
            $this->encoder->encodePassword($user,'0000')
        );

        $user->setPhone('(47) 99109-0881');
        $user->setDateOfBirth(new \DateTime('now'));
        $user->setName('Denis Prust');
        $user->setMail('prust_denis@hotmail.com');
        $user->setRegistrationDate();
        $manager->persist($user);

        $manager->flush();
    }

}
