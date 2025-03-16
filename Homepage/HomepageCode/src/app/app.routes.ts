import {Routes} from '@angular/router';
import {MainPageComponent} from './core/main/view/main-page/main-page.component';
import {ExperiencePageComponent} from './features/experience/view/experience-page/experience-page.component';
import {ProjectPageComponent} from './features/project/view/project-page/project-page.component';
import {CoursePageComponent} from './features/course/view/course-page/course-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'experience', component: ExperiencePageComponent},
  { path: 'projects', component: ProjectPageComponent},
  { path: 'courses', component: CoursePageComponent}
];
