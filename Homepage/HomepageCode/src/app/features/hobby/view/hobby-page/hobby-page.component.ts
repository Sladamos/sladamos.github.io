import {AfterViewInit, ChangeDetectionStrategy, Component, computed, inject, OnInit, signal} from '@angular/core';
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
export class HobbyPageComponent {
  hobbies = inject(HobbyService).hobbies;
  currentHobbyIndex = signal(parseInt(localStorage.getItem('currentHobbyIndex') || '0', 10));
  selectedHobby = computed(() => this.hobbies()[this.currentHobbyIndex()])

  onHobbyChipClicked(event: HobbyModel) {
    const hobbyIndex = this.hobbies().map(e => e.name).indexOf(event.name);
    this.currentHobbyIndex.set(hobbyIndex);
    localStorage.setItem('currentHobbyIndex', hobbyIndex.toString());
  }
}
