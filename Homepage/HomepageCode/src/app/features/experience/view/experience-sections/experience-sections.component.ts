import {ChangeDetectionStrategy, Component, input, InputSignal, OnInit, output, signal} from '@angular/core';
import {ExperienceSectionModel} from '../../model/experience-section-model';
import {SectionSelectorComponent} from '../../../../core/shared/view/section-selector/section-selector.component';

@Component({
  selector: 'app-experience-sections',
  templateUrl: './experience-sections.component.html',
  styleUrl: './experience-sections.component.css',
  imports: [
    SectionSelectorComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceSectionsComponent implements OnInit {
  sections: InputSignal<ExperienceSectionModel[]> = input.required<ExperienceSectionModel[]>();
  currentSectionIndex = signal(parseInt(localStorage.getItem('currentSectionIndex') || '0', 10));
  onSectionSelected = output<ExperienceSectionModel>();

  ngOnInit(): void {
    this.emitEventAboutSectionSelected(this.currentSectionIndex());
  }

  onSectionIndexSelected(number: number) {
    this.currentSectionIndex.set(number);
    localStorage.setItem('currentSectionIndex', number.toString());
    this.emitEventAboutSectionSelected(number);
  }

  private emitEventAboutSectionSelected(number: number) {
    this.onSectionSelected.emit(this.sections()[number])
  }
}
