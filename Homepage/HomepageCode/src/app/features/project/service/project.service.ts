import {Injectable, signal} from '@angular/core';
import {ProjectModel} from '../model/project-model';
import {ProjectTechnology} from '../model/project-technology';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = signal<ProjectModel[]>([]);

  private readonly javaColor = '#ca5f04';
  private readonly pythonColor = '#008844';
  private readonly dartColor = '#803094';
  private technologies: ProjectTechnology[] = [
    {
      name: 'Docker',
      textColor: '#299ef2'
    },
    {
      name: 'Vue',
      textColor: '#5299A0',
      aliases: ['Vue.js', 'TS', 'TypeScript', 'JS', 'JavaScript']
    },
    {
      name: 'CSS',
      textColor: '#294ef2'
    },
    {
      name: 'Angular',
      textColor: '#e31122',
      aliases: ['TS', 'TypeScript']
    },
    {
      name: 'Express.js',
      textColor: '#e8f21f',
      aliases: ['JS', 'JavaScript']
    },
    {
      name: 'Mongoose',
      textColor: '#1eb02a'
    },
    {
      name: 'Dart',
      textColor: this.dartColor
    },
    {
      name: 'Flutter',
      textColor: this.dartColor
    },
    {
      name: 'Python',
      textColor: this.pythonColor
    },
    {
      name: 'Tensorflow',
      textColor: this.pythonColor,
      aliases: ['Keras']
    },
    {
      name: 'Java',
      textColor: this.javaColor
    },
    {
      name: 'Spring',
      textColor: this.javaColor
    },
    {
      name: 'Mockito',
      textColor: this.javaColor
    },
    {
      name: 'AssertJ',
      textColor: this.javaColor
    },
    {
      name: 'JUnit',
      textColor: this.javaColor
    }
  ]

  constructor() {
    this.projects.set([ //TODO - add optional icons to chips :D
      /*{
        name: 'Manusteril',
        description: '',
        imgUrl: 'projects_kingdomSimulation.png',
        sourceCodeUrl: 'https://github.com/Sladamos/KingdomSimulation',
        technologies: [
          this.getTechnology('Java'), this.getTechnology('JUnit'), this.getTechnology('Mockito'), this.getTechnology('AssertJ')
        ]
      },
      {
        name: 'Library API',
        description: '',
        imgUrl: 'projects_kingdomSimulation.png',
        sourceCodeUrl: 'https://github.com/Sladamos/KingdomSimulation',
        technologies: [
          this.getTechnology('Java'), this.getTechnology('JUnit'), this.getTechnology('Mockito'), this.getTechnology('AssertJ')
        ]
      },
      {
        name: 'CoronaryApp',
        description: '',
        imgUrl: 'projects_kingdomSimulation.png',
        sourceCodeUrl: 'https://github.com/Sladamos/KingdomSimulation',
        technologies: [
          this.getTechnology('Java'), this.getTechnology('JUnit'), this.getTechnology('Mockito'), this.getTechnology('AssertJ')
        ]
      }
      {
        name: 'QualifiedElectronicSignature',
        description: '',
        imgUrl: 'projects_kingdomSimulation.png',
        sourceCodeUrl: 'https://github.com/Sladamos/KingdomSimulation',
        technologies: [
          this.getTechnology('Java'), this.getTechnology('JUnit'), this.getTechnology('Mockito'), this.getTechnology('AssertJ')
        ]
      },*/
      {
        name: 'Homepage',
        description: 'This is a zoneless Angular 19 application designed as a personal homepage to show information about myself. It contains features such as standalone components, signal state management, using zoneless approach. The project follows a clean structure and responsive styles. It also contains different themes for seasons.',
        imgUrl: 'projects_homepage.png',
        sourceCodeUrl: 'https://github.com/Sladamos/sladamos.github.io/tree/main/Homepage',
        technologies: [
          this.getTechnology('Angular'), this.getTechnology('CSS')
        ]
      },
      {
        name: 'Raistopy',
        description: 'Raistopy is an experimental web application developed as part of the "Realizacja Aplikacji Internetowych" laboratory course. The project displays information about public transportation stops using the ZTM Gdańsk API. The entire application is built on a micro-frontends architecture and containerized using Docker.',
        imgUrl: 'projects_raistopy.png',
        sourceCodeUrl: 'https://github.com/Sladamos/Raistopy',
        technologies: [
          this.getTechnology('Docker'), this.getTechnology('Vue'), this.getTechnology('CSS'), this.getTechnology('Express.js'), this.getTechnology('Mongoose'),
        ]
      },
      {
        name: 'Kingdom Simulation',
        description: 'The KingdomSimulation project is an advanced simulation that manages resource production, military buildup, and combat operations within a multithreaded environment. It is a console application which uses wait(), notifyAll(), and monitor mechanisms for thread synchronization. Its functionality is verified with unit tests implemented using JUnit, Mockito and AssertJ. The application supports both automatic and manual modes.',
        imgUrl: 'projects_kingdomSimulation.png',
        sourceCodeUrl: 'https://github.com/Sladamos/KingdomSimulation',
        technologies: [
          this.getTechnology('Java'), this.getTechnology('JUnit'), this.getTechnology('Mockito'), this.getTechnology('AssertJ')
        ]
      },
      {
        name: 'SLEMA',
        description: 'SLEMA is a multi-platform project developed for the Fundacja Toczeń Polska, built using a diverse technology stack that includes Dart, Java, TypeScript, and more. Featuring integrated chat functionality across web and mobile platforms, SLEMA was developed using SCRUM. The project is written in Flutter framework, whereas chat backend is written in Spring framework.',
        imgUrl: 'projects_slema.png',
        sourceCodeUrl: 'https://github.com/Sladamos/SLEMA',
        technologies: [
          this.getTechnology('Java'), this.getTechnology('Spring'), this.getTechnology('Dart'), this.getTechnology('Flutter')
        ]
      },
      {
        name: 'Dogs Detector',
        description: 'Python application which uses AI to classify dogs based on their breeds. The detector uses convolutional neural network created from scratch or created with transfer learning. Models were trained on five breeds selected from Stanford Dogs dataset. GUI is created in PyQT5, but there also is console variant.',
        imgUrl: 'projects_dogsDetector.png',
        sourceCodeUrl: 'https://github.com/Sladamos/DogsDetector',
        technologies: [
          this.getTechnology('Python'), this.getTechnology('Tensorflow')
        ]
      },
    ]);
  }

  private getTechnology(name: string): ProjectTechnology {
    return this.technologies.find(technology => technology.name === name)!;
  }
}
