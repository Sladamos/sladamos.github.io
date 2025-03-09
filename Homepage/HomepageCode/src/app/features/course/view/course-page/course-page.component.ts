import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CourseItemComponent} from '../course-item/course-item.component';
import {CourseService} from '../../service/course.service';

@Component({
  selector: 'app-course-page',
  imports: [
    CourseItemComponent
  ],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'container__normal'
  }
})
export class CoursePageComponent {

  courses = inject(CourseService).courses;

}
