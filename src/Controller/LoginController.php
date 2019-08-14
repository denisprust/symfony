<?php


namespace App\Controller;

use App\Entity\User;
use App\Entity\Vehicle;
use Doctrine\DBAL\Types\DateType;
use Doctrine\DBAL\Types\TextType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use App\Controller\HomeController;

class LoginController extends AbstractController
{

    /**
     * @return Response
     * @Method("POST")
     * @Route("login2")
     */
    public function loginView(Request $request) {
        $messageStatus = $messageValidation = '';
        if($request->get('mail') && $request->get('password')) {
            $user = new UserController();

            $user->session = SessionInterface::class;
            $repository = $this->getDoctrine()->getRepository(User::class);

            $data = $repository->findOneBy([
                'mail' => $request->get('mail'),
                'password' => $request->get('password')
            ]);

            if($data) {
//                $user->session->set('user', 'attribute-value');
                $_SESSION['user'] = $data;

                return $this->redirectToRoute('app_home_homeview');
            } else {
                $messageValidation = 'Usuário ou senha inválidos.';
                $messageStatus = 'danger';
            }

        }
//        $newuser = new User();
//        $newuser->setMail('teste@teste.com.br');
//        $newuser->setPassword('aaaaaaaaaaaaaaaaaa');
//        $form = $this->createFormBuilder($newuser)
//                    ->add('task', TextType::class)
//                    ->add('dueDate', DateType::class)
//                    ->add('save', SubmitType::class, ['label' => 'Create Task'])
//                    ->getForm();

        return $this->render('login/login.html.twig', [
            'ignoreTemplate' => true,
            'messageValidation' => $messageValidation,
            'messageStatus' => $messageStatus,
//            'form' => $form->createView(),
        ]);
    }
}