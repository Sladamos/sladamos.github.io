import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-project-members',
  imports: [],
  templateUrl: './project-members.component.html',
  styleUrl: './project-members.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectMembersComponent {
  numberOfMembers = input.required<number>();
}
