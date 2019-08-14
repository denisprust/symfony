<?php


namespace App\Controller;

use App\DataFixtures\UserFixture;
use App\Entity\Carro;
use App\Entity\User;
use App\Form\RegistrationType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class RegistrationController extends AbstractController
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    /**
     * @return Response
     * @Route("cadastrar")
     */
    public function registrationView(Request $request) {
        $messageValidation = $messageStatus = null;
        $user = new User();
        $form = $this->createForm(RegistrationType::class, $user, [
            'action' => $this->generateUrl('app_registration_registrationview'),
            'method' => 'post'
        ]);

        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $repositoryUser = $this->getDoctrine()->getRepository(User::class)->findOneByUsername($user->getUsername());
            if($repositoryUser) {
                $user->setUsername('');
                $messageStatus = 'danger';
                $messageValidation = 'Este usuário já existe. Favor informar outro.';
            } else {
                $user->setPassword(
                    $this->encoder->encodePassword($user,$user->getPassword())
                );
                $user->setRegistrationDate(new \DateTime('now'));
                $em = $this->getDoctrine()->getManager();

                $em->persist($user);
                $em->flush();
                return $this->redirectToRoute('app_login_loginview');
            }
        }

        return $this->render('registration/registration.html.twig', [
            'ignoreTemplate' => true,
            'messageValidation' => $messageValidation,
            'messageStatus' => $messageStatus,
            'form' => $form->createView()
        ]);
    }

    /**
     * @return Response
     * @Route("home")
     * @Route("")
     */
    public function homeView(Request $request)
    {

        $cars = $this->getDoctrine()->getRepository(Carro::class)->createQueryBuilder('c');

        if ($request->get('description') != null) {
            $cars = $cars->where('c.description like :description')
                ->setParameter('description', '%' . $request->get('description') . '%');
        }

        if ($request->get('brand') != null) {
            $cars->andWhere('c.brand like :brand')->setParameter('brand', '%' . $request->get('brand') . '%');
        }

        if ($request->get('price1') != null && $request->get('price2') != null) {
            $cars = $cars->andWhere('c.price >= :price1')
                ->andWhere('c.price <= :price2')
                ->setParameter('price1', $request->get('price1'))
                ->setParameter('price2', $request->get('price2'));
        }

        $cars = $cars->getQuery()->getResult();

        return $this->render('home/home.html.twig', [
            'cars' => $cars,
            'form' => [
                'description' => $request->get('description'),
                'brand' => $request->get('brand'),
                'price1' => $request->get('price1'),
                'price2' => $request->get('price2'),
                'year1' => $request->get('year1'),
                'year2' => $request->get('year2'),
            ]
        ]);
    }
}