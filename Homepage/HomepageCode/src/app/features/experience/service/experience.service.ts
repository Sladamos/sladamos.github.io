import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  sections = signal([
    {
      title: 'Job', items: [
        {
          company: 'Software Mind',
          title: 'Junior software engineer',
          from: '05-2025',
          assetSrc: 'experience_softwaremind.jpg',
          description:
            '<ul class="experience__description-list">' +
            '<li>Eliminating security vulnerabilities in both Gradle and Maven builds using Veracode</li>' +
            '<li>Designing and implementing UI components in Thymeleaf and Angular, integrated with Chart.js and Bootstrap</li>' +
            '<li>Developing Java applications using Spring Boot, JUnit, and TestNG</li>' +
            '<li>Writing acceptance tests with Gherkin and Cucumber</li>' +
            '<li>Using JPQL and Oracle for data persistence</li>' +
            '<li>Practicing pair programming for collaborative development</li></ul>'
        },
        {
          company: 'Consdata',
          title: 'Junior fullstack developer',
          from: '10-2024',
          to: '04-2025',
          assetSrc: 'experience_consdata.png',
          description:
            '<ul class="experience__description-list">' +
            '<li><span class="experience__description-item-name">Backend:</span> Developing modular monolith with microservices in Java with Spring and JUnit. Implementing SOAP and REST services. Migrating from Spring 2 to Spring 3. Sync and async integration with external API.</li>' +
            '<li><span class="experience__description-item-name">Frontend:</span> Developing in Angular and styling with SCSS ensuring WCAG compliance. Developing external components in Lit.js.</li>' +
            '<li><span class="experience__description-item-name">CI/CD:</span> Creating Jenkins Pipelines, containerizing with Docker, using Kubernetes, Argo CD and Git.</li>' +
            '<li><span class="experience__description-item-name">Administration:</span> Maintaining Tomcat and Apache. Migrating Tomcat and Camunda. Managing certs.</li>' +
            '<li><span class="experience__description-item-name">Cloud:</span> Integration with GCP and Firebase in a cloud-based project for cloud guild.</li>' +
            '<li><span class="experience__description-item-name">Other:</span> Working in Scrum. Using Jira and Confluence. Communicating with clients, presenting application demos, assembling and delivering deployment packages.</li></ul>'
        },
        {
          company: 'Consdata',
          title: 'Fullstack developer internship',
          from: '07-2024',
          to: '09-2024',
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
          from: '02-2025',
          assetSrc: 'experience_pg.jpg',
          description: '<ul class="experience__description-list"><li>Specialization: Geoinformatic and Mobile Technologies</li>' +
            '<li>Thesis: Efficiency and performance analysis of Object Relational Mapping tools in Java using a custom-made test environment</li>' +
            '<li>Student Representative for my specialization</li>'
        },
        {
          company: 'Gdańsk University of Technology',
          title: 'Bachelor of Computer science',
          from: '10-2021',
          to: '02-2025',
          assetSrc: 'experience_pg.jpg',
          description: '<ul class="experience__description-list"><li>First specialization: Applications</li>' +
            '<li>Second specialization: Algorithms and Systems Modeling</li>' +
            '<li>Thesis: Application for 3D reconstruction of bifurcation points from a series of coronal planar images</li>'
        },
        {
          company: 'II High School in Elbląg',
          title: 'Mathematics and physics',
          from: '09-2018',
          to: '05-2021',
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
          from: '07-2021',
          to: '06-2025',
          assetSrc: 'experience_ping.png',
          description: '<ul class="experience__description-list"><li>Contains Capture The Flag section</li>' +
            '<li>Mainly focused on cybersecurity and networks</li>' +
            '<li>Interesting lectures every week</li></ul>' +
            '<img class="experience__image" alt="Science club lecture" src="assets/images/experience/experience_lecture.jpg" />'
        }
      ]
    }
  ]);
}
