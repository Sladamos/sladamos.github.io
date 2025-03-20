import {inject, Injectable, signal} from '@angular/core';
import {CourseModel} from '../model/course-model';
import {TechnologyService} from '../../technology/service/technology.service';
import {IssuerService} from '../../issuer/service/issuer.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private technologyService = inject(TechnologyService);
  private issuerService = inject(IssuerService);
  courses = signal<CourseModel[]>([
    {
      title: 'Docker Deep Dive',
      issuer: this.issuerService.getIssuer('Pluralsight'),
      technologies: [this.technologyService.getTechnology('Docker')],
      certificateUrl: 'course_dockerDeepDive.pdf'
    },
    {
      title: 'Developing Applications with Google Cloud: Foundations',
      issuer: this.issuerService.getIssuer('Pluralsight'),
      technologies: [this.technologyService.getTechnology('GCP')],
      certificateUrl: 'course_gcpDevelopFounda.pdf'
    },
    {
      title: 'Bezpieczeństwo systemu Linux',
      issuer: this.issuerService.getIssuer('ECSC'),
      technologies: [this.technologyService.getTechnology('Linux')],
      certificateUrl: 'course_securityLinux.pdf'
    },
    {
      title: 'Foundations of Document Databases with MongoDB',
      issuer: this.issuerService.getIssuer('Pluralsight'),
      technologies: [this.technologyService.getTechnology('MongoDB')],
      certificateUrl: 'course_mongoFounda.pdf'
    },
    {
      title: 'Gradle Fundamentals',
      issuer: this.issuerService.getIssuer('Pluralsight'),
      technologies: [this.technologyService.getTechnology('Gradle')],
      certificateUrl: 'course_gradleFund.pdf'
    },
    {
      title: 'Bezpieczeństwo Systemu Windows',
      issuer: this.issuerService.getIssuer('ECSC'),
      technologies: [this.technologyService.getTechnology('Windows')],
      certificateUrl: 'course_securityWindows.pdf'
    },
    {
      title: 'Google Cloud Fundamentals: Core Infrastructure',
      issuer: this.issuerService.getIssuer('Pluralsight'),
      technologies: [this.technologyService.getTechnology('GCP')],
      certificateUrl: 'course_gcpCoreInfraFund.pdf'
    },
    {
      title: 'Akademia Bezpieczeństwa',
      issuer: this.issuerService.getIssuer('ECSC'),
      technologies: [],
      certificateUrl: 'course_securityAcademy.pdf'
    },
    {
      title: 'Essential Google Cloud Infrastructure: Foundation',
      issuer: this.issuerService.getIssuer('Pluralsight'),
      technologies: [this.technologyService.getTechnology('GCP')],
      certificateUrl: 'course_gcpInfraFund.pdf'
    },
    {
      title: 'Networking in Google Cloud: Fundamentals',
      issuer: this.issuerService.getIssuer('Pluralsight'),
      technologies: [this.technologyService.getTechnology('GCP')],
      certificateUrl: 'course_gcpNetworkFund.pdf'
    },
    {
      title: 'Querying Data from MongoDB',
      issuer: this.issuerService.getIssuer('Pluralsight'),
      technologies: [this.technologyService.getTechnology('MongoDB')],
      certificateUrl: 'course_mongoQuery.pdf'
    },
    {
      title: 'Angular - The Complete Guide',
      issuer: this.issuerService.getIssuer('Udemy'),
      technologies: [this.technologyService.getTechnology('Angular')],
      certificateUrl: 'course_angularComplete.pdf'
    },
    {
      title: 'Modern HTML & CSS From The Beginning 2.0',
      issuer: this.issuerService.getIssuer('Udemy'),
      technologies: [this.technologyService.getTechnology('CSS')],
      certificateUrl: 'course_modernHtmlCss.pdf'
    },
    {
      title: 'Design Patterns in Java',
      issuer: this.issuerService.getIssuer('Udemy'),
      technologies: [this.technologyService.getTechnology('Java')],
      certificateUrl: 'course_designPatternsJava.pdf'
    },
    {
      title: 'Practical Test Driven Development for Java Programmers',
      issuer: this.issuerService.getIssuer('Udemy'),
      technologies: [this.technologyService.getTechnology('Java'), this.technologyService.getTechnology('Mockito')],
      certificateUrl: 'course_practicalTDDJava.pdf'
    },
    {
      title: 'Master Object Oriented Design in Java',
      issuer: this.issuerService.getIssuer('Udemy'),
      technologies: [this.technologyService.getTechnology('Java')],
      certificateUrl: 'course_masterOOOJava.pdf'
    },
    {
      title: 'Docker & Kubernetes: The Practical Guide',
      issuer: this.issuerService.getIssuer('Udemy'),
      technologies: [this.technologyService.getTechnology('Docker'), this.technologyService.getTechnology('Kubernetes')],
      certificateUrl: 'course_dockerKubernetesComplete.pdf'
    }
  ]);
}

