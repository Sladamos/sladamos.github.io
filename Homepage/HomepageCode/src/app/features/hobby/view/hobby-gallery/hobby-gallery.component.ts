import {ChangeDetectionStrategy, Component, input, Input, OnInit} from '@angular/core';
import {HobbyModel} from '../../model/hobby-model';
import {HobbyItemModel} from '../../model/hobby-item-model';

@Component({
  selector: 'app-hobby-gallery',
  imports: [],
  templateUrl: './hobby-gallery.component.html',
  styleUrl: './hobby-gallery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HobbyGalleryComponent implements OnInit {
    hobby = input.required<HobbyModel>();
    selectedItem?: HobbyItemModel;

    ngOnInit() {
      this.selectedItem = this.hobby().items[0];
    }
}
