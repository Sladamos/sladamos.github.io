import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {ProjectModel} from '../../model/project-model';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {ProjectTechnologyChipComponent} from '../project-technology-chip/project-technology-chip.component';
import {ProjectMembersComponent} from '../project-members/project-members.component';

@Component({
  selector: 'app-project-item',
  imports: [
    FaIconComponent,
    ProjectTechnologyChipComponent,
    ProjectMembersComponent
  ],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent {
  project: InputSignal<ProjectModel> = input.required<ProjectModel>();

  protected readonly faGithub = faGithub;
}
