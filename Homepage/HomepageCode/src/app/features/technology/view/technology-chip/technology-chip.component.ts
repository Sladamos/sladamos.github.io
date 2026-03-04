import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { SafeHtmlPipe } from '../../../../core/security/pipe/safe-html.pipe';
import { TechnologyModel } from '../../model/technology-model';

@Component({
  selector: 'app-technology-chip',
  imports: [SafeHtmlPipe],
  templateUrl: './technology-chip.component.html',
  styleUrls: ['./technology-chip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyChipComponent {
  technology: InputSignal<TechnologyModel> = input.required<TechnologyModel>();
}
