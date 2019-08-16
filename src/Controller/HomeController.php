<?php

namespace App\Controller;

use App\Entity\Vehicle;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController {

    /**
     * @return Response
     * @Route("home")
     * @Route("")
     * @Route("/")
     */
    public function homeView(Request $request) {

        $vehicles = $this->getDoctrine()->getRepository(Vehicle::class)->createQueryBuilder('v');

        if($request->get('description') != null) {
            $vehicles = $vehicles->where('v.description like :description')
                       ->setParameter('description', '%'.$request->get('description').'%');
        }

        if($request->get('brand') != null) {
            $vehicles->andWhere('v.brand like :brand')->setParameter('brand', '%'.$request->get('brand').'%');
        }

        if($request->get('price1') != null && $request->get('price2') != null) {
            $vehicles = $vehicles->andWhere('v.price >= :price1')
                       ->andWhere('v.price <= :price2')
                       ->setParameter('price1', $request->get('price1'))
                       ->setParameter('price2', $request->get('price2'));
        } else if($request->get('price1') != null) {
            $vehicles = $vehicles->andWhere('v.price >= :price1')
                ->setParameter('price1', $request->get('price1'));
        } else if($request->get('price2') != null) {
            $vehicles = $vehicles->andWhere('v.price <= :price2')
                ->setParameter('price2', $request->get('price2'));
        }

        if($request->get('year1') != null && $request->get('year2') != null) {
            $vehicles = $vehicles->andWhere('v.year >= :year1')
                ->andWhere('v.year <= :year2')
                ->setParameter('year1', $request->get('year1'))
                ->setParameter('year2', $request->get('year2'));
        }  else if($request->get('year1') != null) {
            $vehicles = $vehicles->andWhere('v.price >= :year1')
                ->setParameter('year1', $request->get('year1'));
        } else if($request->get('year2') != null) {
            $vehicles = $vehicles->andWhere('v.price <= :year2')
                ->setParameter('year2', $request->get('year2'));
        }

        $vehicles = $vehicles->getQuery()->getResult();

        $nRowsFilter = count($vehicles);

        if($nRowsFilter == 0) {
            $vehicleRepository = $this->getDoctrine()->getRepository(Vehicle::class);
            $vehicles = $vehicleRepository->findAll();
        }

        return $this->render('home/home.html.twig',[
            'cars' => $vehicles,
            'nRows' => $nRowsFilter,
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