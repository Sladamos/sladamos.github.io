import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {TechnologyChipComponent} from '../../../technology/view/technology-chip/technology-chip.component';
import {ProjectModel} from '../../model/project-model';
import {ProjectMembersComponent} from '../project-members/project-members.component';

@Component({
  selector: 'app-project-item',
  imports: [FaIconComponent, TechnologyChipComponent, ProjectMembersComponent],
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent {
  project: InputSignal<ProjectModel> = input.required<ProjectModel>();

  protected readonly faGithub = faGithub;
}
