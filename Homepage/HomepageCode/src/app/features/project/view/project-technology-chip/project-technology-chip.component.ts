import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {SafeHtmlPipe} from '../../../security/pipe/safe-html.pipe';
import {TechnologyModel} from '../../../technology/model/technology-model';

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
  technology: InputSignal<TechnologyModel> = input.required<TechnologyModel>();

}
