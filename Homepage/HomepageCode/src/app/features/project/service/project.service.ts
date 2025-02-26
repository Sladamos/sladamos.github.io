import {Injectable, signal} from '@angular/core';
import {ProjectModel} from '../model/project-model';
import {ProjectTechnology} from '../model/project-technology';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects = signal<ProjectModel[]>([]);

  private readonly javaColor = '#ca5f04';
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
      name: 'Express.js',
      textColor: '#e8f21f',
      aliases: ['JS', 'JavaScript']
    },
    {
      name: 'Mongoose',
      textColor: '#1eb02a'
    },
    {
      name: 'Java',
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
    this.projects.set([
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
      }
    ]);
  }

  private getTechnology(name: string): ProjectTechnology {
    return this.technologies.find(technology => technology.name === name)!;
  }
}
