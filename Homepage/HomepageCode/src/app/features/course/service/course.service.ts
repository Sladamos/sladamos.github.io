import {inject, Injectable, signal} from '@angular/core';
import {CourseModel} from '../model/course-model';
import {TechnologyService} from '../../technology/service/technology.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private technologyService = inject(TechnologyService);
  private readonly issuers = {
    'Udemy': 'issuer_udemy.jpg'
  };
  courses = signal<CourseModel[]>([
    /*
    {
      title: '',
      issuerIconUrl: this.issuers[''],
      issuerName: '',
      technologies: [this.technologyService.getTechnology('')],
      certificateUrl: 'course_.pdf'
    },*/
    {
      title: 'Angular - The Complete Guide',
      issuerIconUrl: this.issuers['Udemy'],
      issuerName: 'Udemy',
      technologies: [this.technologyService.getTechnology('Angular')],
      certificateUrl: 'course_angularComplete.pdf'
    },
    {
      title: 'Modern HTML & CSS From The Beginning 2.0',
      issuerIconUrl: this.issuers['Udemy'],
      issuerName: 'Udemy',
      technologies: [this.technologyService.getTechnology('CSS')],
      certificateUrl: 'course_modernHtmlCss.pdf'
    },
    {
      title: 'Design Patterns in Java',
      issuerIconUrl: this.issuers['Udemy'],
      issuerName: 'Udemy',
      technologies: [this.technologyService.getTechnology('Java')],
      certificateUrl: 'course_designPatternsJava.pdf'
    },
    {
      title: 'Practical Test Driven Development for Java Programmers',
      issuerIconUrl: this.issuers['Udemy'],
      issuerName: 'Udemy',
      technologies: [this.technologyService.getTechnology('Java'), this.technologyService.getTechnology('Mockito')],
      certificateUrl: 'course_practicalTDDJava.pdf'
    },
    {
      title: 'Master Object Oriented Design in Java',
      issuerIconUrl: this.issuers['Udemy'],
      issuerName: 'Udemy',
      technologies: [this.technologyService.getTechnology('Java')],
      certificateUrl: 'course_masterOOOJava.pdf'
    },
    {
      title: 'Docker & Kubernetes: The Practical Guide',
      issuerIconUrl: this.issuers['Udemy'],
      issuerName: 'Udemy',
      technologies: [this.technologyService.getTechnology('Docker'), this.technologyService.getTechnology('Kubernetes')],
      certificateUrl: 'course_dockerKubernetesComplete.pdf'
    }
  ])
}

