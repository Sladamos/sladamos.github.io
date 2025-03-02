import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {SearchBarComponent} from '../../../shared/view/search-bar/search-bar.component';
import {ProjectService} from '../../service/project.service';
import {ProjectItemComponent} from '../project-item/project-item.component';
import {ProjectModel} from '../../model/project-model';

@Component({
  selector: 'app-projects-page',
  imports: [
    SearchBarComponent,
    ProjectItemComponent
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'container__normal'
  }
})
export class ProjectsPageComponent {
  projectService: ProjectService = inject(ProjectService);
  projects = this.projectService.projects;
  searchQuery = signal("")
  displayedProjects = computed(() => !!this.searchQuery() ? this.projects().filter(project => this.doesProjectMatchQuery(project)) : this.projects())

  onValueSearched($value: string) {
    this.searchQuery.set($value);
  }

  doesProjectMatchQuery(project: ProjectModel): boolean {
    const query = this.searchQuery().toUpperCase();
    return project.name.toUpperCase().includes(query) || this.anyTechnologyMatchesQuery(project, query)
  }

  private anyTechnologyMatchesQuery(project: ProjectModel, query: string) {
    const technologyName = this.projectService.technologies.map(technology => technology.name.toUpperCase()).find(name => name === query)
    const projectTechnologiesNames = project.technologies.map(technology => technology.name.toUpperCase());
    return !!technologyName ? projectTechnologiesNames.some(name => name === technologyName) :
      projectTechnologiesNames.some(name => name.includes(query)) || this.projectAliasIncludesQuery(project, query);
  }

  private projectAliasIncludesQuery(project: ProjectModel, query: string) {
    return project.technologies.map(technology => technology.aliases)
      .flatMap(aliases => aliases?.map(alias => alias.toUpperCase()) ?? [])
      .some(alias => alias.includes(query));
  }
}
