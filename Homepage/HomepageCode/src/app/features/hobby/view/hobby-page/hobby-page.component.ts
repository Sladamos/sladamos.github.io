import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {HobbyModel} from '../../model/hobby-model';
import {HobbyChipComponent} from '../hobby-chip/hobby-chip.component';
import {HobbyService} from '../../service/hobby.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-hobby-page',
  imports: [
    HobbyChipComponent,
    NgClass
  ],
  templateUrl: './hobby-page.component.html',
  styleUrl: './hobby-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'container__normal'
  }
})
export class HobbyPageComponent {
  hobbies = inject(HobbyService).hobbies;
  selectedHobby = this.hobbies()[0];

  onHobbyChipClicked(event: HobbyModel) {
    this.selectedHobby = event;
  }
}
