import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {IssuerModel} from '../../model/issuer-model';

@Component({
  selector: 'app-issuer-vertical-chip',
  imports: [],
  templateUrl: './issuer-vertical-chip.component.html',
  styleUrl: './issuer-vertical-chip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssuerVerticalChipComponent {
  issuer = input.required<IssuerModel>()

}
