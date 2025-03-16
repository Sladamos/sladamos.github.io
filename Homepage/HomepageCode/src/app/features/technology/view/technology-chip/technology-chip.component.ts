import {ChangeDetectionStrategy, Component, input, InputSignal} from '@angular/core';
import {TechnologyModel} from '../../model/technology-model';
import { SafeHtmlPipe } from '../../../../core/security/pipe/safe-html.pipe';

@Component({
  selector: 'app-technology-chip',
  imports: [
    SafeHtmlPipe
  ],
  templateUrl: './technology-chip.component.html',
  styleUrl: './technology-chip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnologyChipComponent {
  technology: InputSignal<TechnologyModel> = input.required<TechnologyModel>();

}
