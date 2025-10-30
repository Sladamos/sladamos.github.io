import {inject, Injectable, signal} from '@angular/core';
import {ProjectModel} from '../model/project-model';
import {TechnologyService} from '../../technology/service/technology.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private technologyService: TechnologyService = inject(TechnologyService);
  readonly projects = signal<ProjectModel[]>([
    {
      name: 'HomeApp',
      description: 'HomeApp is a Windows desktop application for managing useful things. Currently, its main module allows users to manage personal book collections: tracking reading status, loans, and dates. The app features multilingual support (Polish and English), logging, and both cloud and local H2 databases. Developed with TDD in the core module, it is still in active development.',
      imgUrl: 'projects_homeapp.png',
      sourceCodeUrl: 'https://github.com/Sladamos/home-app',
      teamMembers: 1,
      technologies: [
        this.technologyService.getTechnology('Java'), this.technologyService.getTechnology('Spring'), this.technologyService.getTechnology('JUnit'), this.technologyService.getTechnology('JavaFX'), this.technologyService.getTechnology('Mockito'), this.technologyService.getTechnology('AssertJ'),
      ]
    },
    {
      name: 'Manusteril',
      description: 'Manusteril is an advanced distributed system that uses pub/sub architecture, fail-fast mechanisms, circuit breakers, and ensures resilience through eventual consistency. It features a console-based GUI and allows the declaration of departments of various types and quantities, as shown in the example image - such as two general and one cardiology ward. The system also utilizes Ninject for dependency injection, providing a flexible and scalable architecture.',
      imgUrl: 'projects_manusteril.png',
      sourceCodeUrl: 'https://github.com/Sladamos/Manusteril',
      teamMembers: 1,
      technologies: [
        this.technologyService.getTechnology('C#'), this.technologyService.getTechnology('RabbitMQ'), this.technologyService.getTechnology('Docker'), this.technologyService.getTechnology('MassTransit')
      ]
    },
    {
      name: 'Contourer',
      description: 'Contourer is a multi-module desktop application that allows users to load Digital Elevation Models (DEMs) in the ASC format and overlay them with map images. It features an implementation of the Marching Squares algorithm to generate contour lines, with the ability to specify the number of contour levels for precise terrain analysis. The application supports intuitive map interaction through zooming and panning. Developed using a strict TDD approach.',
      imgUrl: 'projects_contourer.png',
      sourceCodeUrl: 'https://github.com/Sladamos/contourer/',
      teamMembers: 1,
      technologies: [
        this.technologyService.getTechnology('Java'), this.technologyService.getTechnology('JUnit'), this.technologyService.getTechnology('JavaFX'), this.technologyService.getTechnology('Mockito'), this.technologyService.getTechnology('AssertJ'),
      ]
    },
    {
      name: 'Library API',
      description: 'Library API is an application divided into microservices which are deployed via Eureka. It consists of books and publishing houses. It allows simple CRUD operations on both of them. The goal of the project was to create monolith and then divide it into separate microservices with their own persistence. It was required to use synchronous communication via RestTemplates.',
      imgUrl: 'projects_libraryApi.png',
      sourceCodeUrl: 'https://github.com/Sladamos/LibraryAPI/',
      teamMembers: 1,
      technologies: [
        this.technologyService.getTechnology('Java'), this.technologyService.getTechnology('Spring'), this.technologyService.getTechnology('Angular'), this.technologyService.getTechnology('CSS'), this.technologyService.getTechnology('Docker')
      ]
    },
    {
      name: 'CoronaryApp',
      description: 'This application reconstructs three-dimensional bifurcation points in coronary vessels using only a series of planar angiography images. It analyzes the shape, size, and direction of shadows to approximate the original 3D locations, offering a fully automated Voxel Hull algorithm and a semi-automatic method that incorporates additional user input. Both techniques were validated with synthetic data to ensure accuracy. The system utilizes three.js for 3D visualization of vessels and bifurcation points.',
      imgUrl: 'projects_coronaryApp.png',
      sourceCodeUrl: 'https://github.com/Sladamos/CoronaryApp',
      teamMembers: 2,
      technologies: [
        this.technologyService.getTechnology('Python'), this.technologyService.getTechnology('Django'), this.technologyService.getTechnology('React'),  this.technologyService.getTechnology('CSS'), this.technologyService.getTechnology('Three.js'), this.technologyService.getTechnology('Docker')
      ]
    },
    {
      name: 'XadesEmulator',
      description: 'XadesEmulator is an application that simulates XAdES signatures, allowing the encryption and decryption of TXT and PDF files. It uses a private key secured with a password, stored on a USB device. The application attempts to automatically detect the key but also provides the option to manually select it. The app features a styled UI and includes unit tests to ensure both security and stability.',
      imgUrl: 'projects_xadesEmulator.png',
      sourceCodeUrl: 'https://github.com/Sladamos/XadesEmulator',
      teamMembers: 1,
      technologies: [
        this.technologyService.getTechnology('Java'), this.technologyService.getTechnology('JUnit'), this.technologyService.getTechnology('JavaFX'), this.technologyService.getTechnology('Mockito'), this.technologyService.getTechnology('AssertJ'),
      ]
    },
    {
      name: 'Homepage',
      description: 'This is a zoneless Angular 19 application designed as a personal homepage to show information about myself. It contains features such as standalone components, signal state management, using zoneless approach. The project follows a clean structure and responsive styles. It also contains different themes for seasons.',
      imgUrl: 'projects_homepage.png',
      sourceCodeUrl: 'https://github.com/Sladamos/sladamos.github.io/tree/main/Homepage',
      teamMembers: 1,
      technologies: [
        this.technologyService.getTechnology('Angular'), this.technologyService.getTechnology('CSS'), this.technologyService.getTechnology('Figma')
      ]
    },
    {
      name: 'Kingdom Simulation',
      description: 'The KingdomSimulation project is an advanced simulation that manages resource production, military buildup, and combat operations within a multithreaded environment. It is a console application which uses wait(), notifyAll(), and monitor mechanisms for thread synchronization. Its functionality is verified with unit tests implemented using JUnit, Mockito and AssertJ. The application supports both automatic and manual modes.',
      imgUrl: 'projects_kingdomSimulation.png',
      sourceCodeUrl: 'https://github.com/Sladamos/KingdomSimulation',
      teamMembers: 1,
      technologies: [
        this.technologyService.getTechnology('Java'), this.technologyService.getTechnology('JUnit'), this.technologyService.getTechnology('Mockito'), this.technologyService.getTechnology('AssertJ')
      ]
    },
    {
      name: 'Raistopy',
      description: 'Raistopy is an experimental web application developed as part of the "Realizacja Aplikacji Internetowych" laboratory course. The project displays information about public transportation stops using the ZTM Gdańsk API. The entire application is built on a micro-frontends architecture and containerized using Docker.',
      imgUrl: 'projects_raistopy.png',
      sourceCodeUrl: 'https://github.com/Sladamos/Raistopy',
      teamMembers: 2,
      technologies: [
        this.technologyService.getTechnology('Express.js'), this.technologyService.getTechnology('Vue'), this.technologyService.getTechnology('CSS'), this.technologyService.getTechnology('Mongoose'), this.technologyService.getTechnology('Docker'), this.technologyService.getTechnology('Cypress')
      ]
    },
    {
      name: 'SLEMA',
      description: 'SLEMA is a multi-platform project developed for the Fundacja Toczeń Polska, built using a diverse technology stack that includes Dart and Java. Featuring integrated chat functionality across web and mobile platforms, SLEMA was developed using SCRUM. The project is written in Flutter framework, whereas chat backend is written in Spring framework.',
      imgUrl: 'projects_slema.png',
      sourceCodeUrl: 'https://github.com/Sladamos/SLEMA',
      teamMembers: 4,
      technologies: [
        this.technologyService.getTechnology('Java'), this.technologyService.getTechnology('Spring'), this.technologyService.getTechnology('Dart'), this.technologyService.getTechnology('Flutter'), this.technologyService.getTechnology('Figma')
      ]
    },
    {
      name: 'Dogs Detector',
      description: 'Python application which uses AI to classify dogs based on their breeds. The detector uses convolutional neural network created from scratch or created with transfer learning. Models were trained on five breeds selected from Stanford Dogs dataset. GUI is created in PyQT5, but there also is console variant.',
      imgUrl: 'projects_dogsDetector.png',
      sourceCodeUrl: 'https://github.com/Sladamos/DogsDetector',
      teamMembers: 1,
      technologies: [
        this.technologyService.getTechnology('Python'), this.technologyService.getTechnology('Tensorflow')
      ]
    },
  ]);
}
