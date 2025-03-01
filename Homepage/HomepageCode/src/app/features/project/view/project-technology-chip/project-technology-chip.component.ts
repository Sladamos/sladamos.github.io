import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {ProjectTechnology} from '../../model/project-technology';
import {SafeHtmlPipe} from '../../../security/pipe/safe-html.pipe';

@Component({
  selector: 'app-project-technology-chip',
  imports: [
    SafeHtmlPipe
  ],
  templateUrl: './project-technology-chip.component.html',
  styleUrl: './project-technology-chip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectTechnologyChipComponent {
  technology: InputSignal<ProjectTechnology> = input.required<ProjectTechnology>();

}
