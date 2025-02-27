import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import { ProjectModel } from '../../model/project-model';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {ProjectTechnologyChipComponent} from '../project-technology-chip/project-technology-chip.component';

@Component({
  selector: 'app-project-item',
  imports: [
    FaIconComponent,
    ProjectTechnologyChipComponent
  ],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.reversed]' : 'isReversed()'
  }
})
export class ProjectItemComponent {
  project: InputSignal<ProjectModel> = input.required<ProjectModel>();
  isReversed = input(false);

  protected readonly faGithub = faGithub;
}
