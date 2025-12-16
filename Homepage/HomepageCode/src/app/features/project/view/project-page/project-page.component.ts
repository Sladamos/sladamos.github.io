import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {ProjectService} from '../../service/project.service';
import {ProjectItemComponent} from '../project-item/project-item.component';
import {ProjectModel} from '../../model/project-model';
import {ProjectItemMobileComponent} from '../project-item-mobile/project-item-mobile.component';
import {TechnologyService} from '../../../technology/service/technology.service';
import {SearchBarComponent} from '../../../../core/shared/view/search-bar/search-bar.component';
import {ScreenTypeService} from '../../../../core/shared/service/screen-type.service';
import {delay, filter, Subject, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {LoadingSpinnerComponent} from '../../../../core/shared/view/loading/loading-spinner/loading-spinner.component';
import {LoadingTriggerComponent} from '../../../../core/shared/view/loading/loading-trigger/loading-trigger.component';

const BATCH_SIZE = 5;
const FETCH_DELAY = 1000;

@Component({
  selector: 'app-projects-page',
  imports: [
    SearchBarComponent,
    ProjectItemComponent,
    ProjectItemMobileComponent,
    LoadingSpinnerComponent,
    LoadingTriggerComponent
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

  searchQuery = signal("")
  visibleCount = signal<number>(Number(sessionStorage.getItem('visibleCount')) || BATCH_SIZE);
  isLoadingMore = signal(false);

  projects = this.projectService.projects;

  filteredProjects = computed(() => {
    const query = this.searchQuery().trim().toUpperCase();
    if (!query) return this.projects();
    return this.projects().filter(this.doesProjectMatchQuery(query));
  });

  visibleProjects = computed(() => {
    const filtered = this.filteredProjects();
    const limit = Math.min(this.visibleCount(), filtered.length);
    return filtered.slice(0, limit);
  });

  determineSpinnerSize = computed(() => this.screenTypeService.isNotDesktop() ? 120 : 240)

  private loadMore$ = new Subject<void>();
  private loadMoreSub = this.loadMore$
      .pipe(
        filter(() => !this.isLoadingMore()),
        tap(() => this.isLoadingMore.set(true)),
        delay(FETCH_DELAY),
        tap(() => {
          this.visibleCount.update(v => v + BATCH_SIZE);
          sessionStorage.setItem('visibleCount', this.visibleCount().toString())
          this.isLoadingMore.set(false);
        }),
        takeUntilDestroyed()
      )
      .subscribe();

  onValueSearched($value: string) {
    this.searchQuery.set($value);
  }

  doesProjectMatchQuery(query: string): (project: ProjectModel) => boolean {
    return project => {
      return project.name.toUpperCase().startsWith(query) || this.technologyService.anyTechnologyMatchesQuery(project.technologies, query)
    }
  }

  loadMore() {
    if (this.visibleCount() >= this.filteredProjects().length) return;

    this.loadMore$.next();
  }
}
