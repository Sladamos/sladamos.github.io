import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input, OnChanges,
  OnInit,
  Signal,
  signal,
  SimpleChanges,
  ViewContainerRef,
  WritableSignal
} from '@angular/core';
import {HobbyModel} from '../../model/hobby-model';
import {SectionSelectorComponent} from '../../../../core/shared/view/section-selector/section-selector.component';
import {SectionModel} from '../../../../core/shared/model/section-model';
import {RuntimeService} from '../../../../core/shared/service/runtime.service';

@Component({
  selector: 'app-hobby-gallery',
  imports: [
    SectionSelectorComponent
  ],
  templateUrl: './hobby-gallery.component.html',
  styleUrl: './hobby-gallery.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HobbyGalleryComponent implements OnChanges {
  viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  runtimeService: RuntimeService = inject(RuntimeService);
  hobby = input.required<HobbyModel>();
  selectedItemIndex: WritableSignal<number | undefined> = signal(undefined);
  currentItemIndex = computed(() => this.selectedItemIndex() ?? this.getDefaultIndex());
  selectedItem = computed(() => this.hobby().items[this.currentItemIndex()]);
  sections: Signal<SectionModel[]> = computed(() =>
    this.hobby().items.map(e => ({
      title: `<div class="hobby__item-image-miniature">
      <img alt="Hobby item" src="assets/images/hobby/${e.image}">
    </div>`
    }))
  );

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hobby']) {
      this.selectedItemIndex.set(undefined);
      setTimeout(() => this.runtimeService.fixEmulatedEncapsulation(this.viewContainerRef))
    }
  }

  onSectionIndexSelected(number: number) {
    this.selectedItemIndex.set(number);
    localStorage.setItem(`hobby_${this.hobby().name}_currentSectionIndex`, number.toString());
    setTimeout(() => this.runtimeService.fixEmulatedEncapsulation(this.viewContainerRef))
  }

  private getDefaultIndex() {
    const localStorageIndex = localStorage.getItem(`hobby_${this.hobby().name}_currentSectionIndex`);
    const localStorageItems = localStorage.getItem(`hobby_${this.hobby().name}_items`);
    if (!!localStorageIndex && !!localStorageItems && parseInt(localStorageItems, 10) === this.hobby().items.length) {
      return parseInt(localStorageIndex, 10)
    }
    localStorage.setItem(`hobby_${this.hobby().name}_items`, this.hobby().items.length.toString());
    return 0;
  }
}
