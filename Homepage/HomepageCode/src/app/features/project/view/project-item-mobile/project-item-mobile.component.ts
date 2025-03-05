import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {ProjectTechnologyChipComponent} from "../project-technology-chip/project-technology-chip.component";
import {ProjectModel} from '../../model/project-model';
import {ProjectMembersComponent} from '../project-members/project-members.component';

@Component({
  selector: 'app-project-item-mobile',
  imports: [
    FaIconComponent,
    ProjectTechnologyChipComponent,
    ProjectMembersComponent
  ],
  templateUrl: './project-item-mobile.component.html',
  styleUrl: './project-item-mobile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectItemMobileComponent {
  project: InputSignal<ProjectModel> = input.required<ProjectModel>();

  protected readonly faGithub = faGithub;

}
