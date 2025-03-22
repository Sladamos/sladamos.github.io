import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {HobbyModel} from '../../model/hobby-model';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-hobby-chip',
  imports: [
    FaIconComponent
  ],
  templateUrl: './hobby-chip.component.html',
  styleUrl: './hobby-chip.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "(click)": "onChipClicked.emit(hobby())",
    "(keydown.enter)": "onChipClicked.emit(hobby())",
    "(keydown.space)": "onChipClicked.emit(hobby())",
    "tabindex": "0",
    "role": "button"
  }
})
export class HobbyChipComponent {
  onChipClicked = output<HobbyModel>();
  hobby = input.required<HobbyModel>();
}
