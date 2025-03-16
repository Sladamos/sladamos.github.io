import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  sections = signal([
    {
      title: 'Job', items: [
        {
          company: 'Consdata',
          title: 'Junior fullstack developer',
          from: '01-10-2024',
          assetSrc: 'experience_consdata.png',
          description: '<ul class="experience__description-list"><li>Resolving backend tasks using Java</li>' +
            '<li>Developing frontend solutions with Angular and SASS</li>' +
            '<li>Taking parts in SCRUM meetings</li>' +
            '<li>Contributing as a member of the Cloud Chapter</li>' +
            '<li>Managing simple environment tasks using Jenkins, Docker and Kubernetes</li></ul>'
        },
        {
          company: 'Consdata',
          title: 'Fullstack developer internship',
          from: '01-07-2024',
          to: '30-09-2024',
          assetSrc: 'experience_consdata.png',
          description: '<ul class="experience__description-list"><li>Resolving backend tasks using Java</li>' +
            '<li>Developing frontend solutions with Angular and SASS</li>' +
            '<li>Taking parts in SCRUM meetings</li>' +
            '<li>Managing simple environment tasks using Jenkins, Docker and Kubernetes</li></ul>'
        }
      ]
    },
    {
      title: 'Education', items: [
        {
          company: 'Gdańsk University of Technology',
          title: 'Master of Computer science',
          from: '2025',
          assetSrc: 'experience_pg.jpg',
          description: '<ul class="experience__description-list"><li>Specialization: Geoinformatic and Mobile Technologies</li>' +
            '<li>Focused on expand knowledge in Machine Learning</li>' +
            '<li>Student Representative for my specialization</li>'
        },
        {
          company: 'Gdańsk University of Technology',
          title: 'Bachelor of Computer science',
          from: '2021',
          to: '2025',
          assetSrc: 'experience_pg.jpg',
          description: '<ul class="experience__description-list"><li>First specialization: Applications</li>' +
            '<li>Second specialization: Algorithms and Systems Modeling</li>'
        },
        {
          company: 'II High School in Elbląg',
          title: 'Mathematics and physics',
          from: '2018',
          to: '2021',
          assetSrc: 'experience_lo.png',
          description: '<ul class="experience__description-list"><li>High exam scores</li>' +
            '<li>Taking part in physics olympiad and chemistry olympiad</li>' +
            '<li>Self studying chemistry</li></ul>'
        }
      ]
    },
    {
      title: 'Other', items: [
        {
          company: 'Ping science club',
          title: 'Member',
          from: '01-07-2021',
          assetSrc: 'experience_ping.png',
          description: '<ul class="experience__description-list"><li>Contains Capture The Flag section</li>' +
            '<li>Mainly focused on cybersecurity and networks</li>' +
            '<li>Interesting lectures every week</li></ul>' +
            '<img class="experience__image" src="assets/images/experience/experience_lecture.jpg" />'
        }
      ]
    }
  ]);
}
