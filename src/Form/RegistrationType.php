<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class RegistrationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username', TextType::class, ['label'=> 'Usuário:','attr' => ['class' => 'form-control']])
            ->add('name', TextType::class,['label'=> 'Nome:','attr' => ['class' => 'form-control']])
            ->add('mail', TextType::class,['label'=> 'E-mail:','attr' => ['class' => 'form-control']])
            ->add('password', PasswordType::class, ['label'=> 'Senha:','attr' => ['class' => 'form-control']])
            ->add('password_repeat', PasswordType::class, ['label'=> 'Confirmação de senha:','attr' => ['class' => 'form-control'], 'mapped' => false])
            ->add('phone', TelType::class, ['label'=> 'Telefone','attr' => ['class' => 'form-control phone']])
            ->add('dateOfBirth', DateType::class, ['widget' => 'single_text','label'=> 'Data de Nascimento','attr' => ['class' => 'form-control']])
//            ->add('registrationDate',DateTimeType::class,['label'=> 'Data de Criação','mapped' => false])
//            ->add('updateDate',DateTimeType::class,['label'=> 'Data de alteração','mapped' => false,])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
