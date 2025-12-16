import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {ProjectService} from '../../service/project.service';
import {ProjectItemComponent} from '../project-item/project-item.component';
import {ProjectModel} from '../../model/project-model';
import {ProjectItemMobileComponent} from '../project-item-mobile/project-item-mobile.component';
import {TechnologyService} from '../../../technology/service/technology.service';
import {SearchBarComponent} from '../../../../core/shared/view/search-bar/search-bar.component';
import {ScreenTypeService} from '../../../../core/shared/service/screen-type.service';

@Component({
  selector: 'app-projects-page',
  imports: [
    SearchBarComponent,
    ProjectItemComponent,
    ProjectItemMobileComponent
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'container__normal'
  }
})
export class ProjectPageComponent {
  technologyService: TechnologyService = inject(TechnologyService);
  projectService: ProjectService = inject(ProjectService);
  screenTypeService: ScreenTypeService = inject(ScreenTypeService)
  projects = this.projectService.projects;
  searchQuery = signal("")
  displayedProjects = computed(() => {
    const query = this.searchQuery().trim().toUpperCase();
    if (!query) return this.projects();

    return this.projects().filter(this.doesProjectMatchQuery(query));
  });

  onValueSearched($value: string) {
    this.searchQuery.set($value);
  }

  doesProjectMatchQuery(query: string): (project: ProjectModel) => boolean {
    return project => {
      return project.name.toUpperCase().startsWith(query) || this.technologyService.anyTechnologyMatchesQuery(project.technologies, query)
    }
  }
}
