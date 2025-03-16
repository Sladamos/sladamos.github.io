import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {ProjectModel} from '../../model/project-model';
import {ProjectMembersComponent} from '../project-members/project-members.component';
import {TechnologyChipComponent} from '../../../technology/view/technology-chip/technology-chip.component';

@Component({
  selector: 'app-project-item-mobile',
  imports: [
    FaIconComponent,
    ProjectMembersComponent,
    TechnologyChipComponent
  ],
  templateUrl: './project-item-mobile.component.html',
  styleUrl: './project-item-mobile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemMobileComponent {
  project: InputSignal<ProjectModel> = input.required<ProjectModel>();

  protected readonly faGithub = faGithub;

}
