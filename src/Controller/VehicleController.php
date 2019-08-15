<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Vehicle;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VehicleController extends AbstractController {

    /**
     * @return Response
     * @Route("meus-veiculos")
     */
    public function indexView(Request $request) {
        $username = $this->get('security.token_storage')->getToken()->getUser();

        $vehicles = $this->getDoctrine()->getRepository(Vehicle::class)->createQueryBuilder('v');
        $vehicles = $vehicles->where('v.userId = :userId')->setParameter('userId', $username->getId());

        if($request->get('description') != null) {
            $vehicles = $vehicles->andWhere('v.description like :description')
                                 ->setParameter('description', '%'.$request->get('description').'%');
        }

        if($request->get('brand') != null) {
            $vehicles->andWhere('v.brand like :brand')
                     ->setParameter('brand', '%'.$request->get('brand').'%');
        }

        if($request->get('price1') != null && $request->get('price2') != null) {
            $vehicles = $vehicles->andWhere('v.price >= :price1')
                                 ->andWhere('v.price <= :price2')
                                 ->setParameter('price1', $request->get('price1'))
                                 ->setParameter('price2', $request->get('price2'));
        }

        $vehicles = $vehicles->getQuery()->getResult();

        return $this->render('vehicles/vehicles.html.twig', [
            'vehicles' => $vehicles
        ]);
    }

    /**
     * @return Response
     * @Route("vehicle/delete")
     * @Method("delete")
     */
    public function deleteVehicle(Request $request) {
        try {
            // Param not exist
            if(!$request->get('vehicle_id'))
                throw $this->createNotFoundException('Veículo não encontrado.');

            $entityManager = $this->getDoctrine()->getManager();
            $product = $entityManager->getRepository(Vehicle::class)->find($request->get('vehicle_id'));

            if (!$product)
                throw new \Exception('Veículo não encontrado.');

            $entityManager->remove($product);
            $entityManager->flush();

            $arrayResponse = [
                'message' => 'Veículo excluído com sucesso!',
                'success' => true
            ];
        } catch(\Exception $e) {
            $arrayResponse = [
                'message' => 'Ocorreu um erro ao excluir o veículo.',
                'success' => false
            ];
        }

        $response = new Response();
        $response->setContent(json_encode($arrayResponse));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @return Response
     * @Route("vehicle/post")
     * @Method("post")
     */
    public function saveVehicle(Request $request) {

        try {
            $entityManager = $this->getDoctrine()->getManager();
            $price = str_replace('.','',$request->get('price'));
            $price = str_replace(',','.',$price);
            $username = $this->get('security.token_storage')->getToken()->getUser();

            if($request->get('id')) {
                $vehicle = $entityManager->getRepository(Vehicle::class)->find($request->get('id'));
                if (!$vehicle)
                    throw new \Exception('Veículo não encontrado.');

                $vehicle->setUpdateDate(new \DateTime('now'));

            } else {
                $vehicle = new Vehicle();
                $vehicle->setRegistrationDate(new \DateTime('now'));
            }

            $vehicle->setBrand($request->get('brand'));
            $vehicle->setYear($request->get('year'));
            $vehicle->setModelYear($request->get('model_year'));
            $vehicle->setDescription($request->get('description'));
            $vehicle->setPrice($price);
            $vehicle->setUserId($username->getId());
            $vehicle->setCity($request->get('city'));

            $entityManager->persist($vehicle);
            $entityManager->flush();

            $arrayResponse = [
                'message' => 'Veículo salvo com sucesso!',
                'success' => true
            ];
        } catch(\Exception $e) {
            $arrayResponse = [
                'message' => 'Ocorreu um erro ao salvar o veículo.',
                'success' => false
            ];
        }

        $response = new Response();
        $response->setContent(json_encode($arrayResponse));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    /**
     * @Route("vehicle/modal")
     */
    public function loadModal() {
        return $this->render('vehicles/modal/vehicle.html.twig');
    }

    /**
     * @param Request $request
     * @return Response
     * @Route("vehicles/get-modal-contact")
     */
    public function getModalContact(Request $request) {
        $entityManager = $this->getDoctrine()->getManager();
        $user = $entityManager->getRepository(User::class)->find($request->get('user'));

        return $this->render('home/modal/contact.html.twig', [
            'user' => $user
        ]);
    }

    /**
     * @param Request $request
     * @return Response
     * @Route("vehicles/get-modal")
     */
    public function getModalVehicle(Request $request) {
        $entityManager = $this->getDoctrine()->getManager();
        $vehicle = $entityManager->getRepository(Vehicle::class)->find($request->get('vehicle_id'));

        if (!$vehicle)
            throw $this->createNotFoundException('Veículo não encontrado.');

        return $this->render('home/modal/vehicle.html.twig', [
            'vehicle' => $vehicle
        ]);
    }

    /**
     * @param Request $request
     * @return Response
     * @Route("vehicles/teste")
     */
    public function getModalEditVehicle(Request $request) {
        $entityManager = $this->getDoctrine()->getManager();
        $vehicle = $entityManager->getRepository(Vehicle::class)->find($request->get('vehicle_id'));

        if (!$vehicle)
            return new Response('');

        return $this->render('vehicles/modal/vehicle_edit.html.twig', [
            'vehicle' => $vehicle
        ]);
    }


}