import {ChangeDetectionStrategy, Component, input, Input, InputSignal} from '@angular/core';
import {ProjectTechnology} from '../../model/project-technology';

@Component({
  selector: 'app-project-technology-chip',
  imports: [],
  templateUrl: './project-technology-chip.component.html',
  styleUrl: './project-technology-chip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectTechnologyChipComponent {
  technology: InputSignal<ProjectTechnology> = input.required<ProjectTechnology>();

}
