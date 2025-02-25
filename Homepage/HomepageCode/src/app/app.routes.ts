import { Routes } from '@angular/router';
import {MainPageComponent} from './core/main/view/main-page/main-page.component';
import {ExperiencePageComponent} from './features/experience/view/experience-page/experience-page.component';
import {ProjectsPageComponent} from './features/project/view/projects-page/projects-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'experience', component: ExperiencePageComponent},
  { path: 'projects', component: ProjectsPageComponent}
];
