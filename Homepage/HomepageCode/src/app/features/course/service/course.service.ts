import {inject, Injectable, signal} from '@angular/core';
import {CourseModel} from '../model/course-model';
import {TechnologyService} from '../../technology/service/technology.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private technologyService = inject(TechnologyService);
  courses = signal<CourseModel[]>([
    {
      title: 'Angular - The Complete Guide (2025 Edition) ',
      issuerIconUrl: 'issuer_udemy.jpg',
      issuerName: 'Udemy',
      technologies: [this.technologyService.getTechnology('Angular')],
      certificateUrl: 'course_angularComplete.pdf'
    },
    {
      title: '',
      issuerIconUrl: 'issuer_.jpg',
      issuerName: '',
      technologies: [this.technologyService.getTechnology('')],
      certificateUrl: 'course_.pdf'
    },
}
