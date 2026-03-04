import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {SearchBarComponent} from '../../../../core/shared/view/search-bar/search-bar.component';
import {TechnologyService} from '../../../technology/service/technology.service';
import {CourseModel} from '../../model/course-model';
import {CourseService} from '../../service/course.service';
import {CourseItemComponent} from '../course-item/course-item.component';

@Component({
  selector: 'app-course-page',
  imports: [CourseItemComponent, SearchBarComponent],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'container__normal',
  },
})
export class CoursePageComponent {
  courses = inject(CourseService).courses;
  technologyService = inject(TechnologyService);
  searchQuery = signal('');
  displayedCourses = computed(() =>
    !!this.searchQuery()
      ? this.courses().filter(course => this.doesCourseMatchQuery(course))
      : this.courses(),
  );

  onSearch($value: string) {
    this.searchQuery.set($value);
  }

  doesCourseMatchQuery(course: CourseModel): boolean {
    const query = this.searchQuery().toUpperCase();
    return (
      course.title.toUpperCase().startsWith(query) ||
      course.issuer.name.toUpperCase().startsWith(query) ||
      this.technologyService.anyTechnologyMatchesQuery(course.technologies, query)
    );
  }
}
