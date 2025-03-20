import {AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {HobbyModel} from '../../model/hobby-model';
import {HobbyChipComponent} from '../hobby-chip/hobby-chip.component';
import {HobbyService} from '../../service/hobby.service';
import {NgClass} from '@angular/common';
import {HobbyGalleryComponent} from '../hobby-gallery/hobby-gallery.component';

@Component({
  selector: 'app-hobby-page',
  imports: [
    HobbyChipComponent,
    NgClass,
    HobbyGalleryComponent
  ],
  templateUrl: './hobby-page.component.html',
  styleUrl: './hobby-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'container__normal'
  }
})
export class HobbyPageComponent implements OnInit {
  hobbies = inject(HobbyService).hobbies;
  selectedHobby?: HobbyModel;

  ngOnInit() {
    this.selectedHobby = this.hobbies()[0];
  }

  onHobbyChipClicked(event: HobbyModel) {
    this.selectedHobby = event;
  }
}
