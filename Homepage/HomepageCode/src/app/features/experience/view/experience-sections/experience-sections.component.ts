import {ChangeDetectionStrategy, Component, input, InputSignal, OnInit, output, signal} from '@angular/core';
import {SectionSelectorComponent} from '../../../../core/shared/view/section-selector/section-selector.component';
import {ExperienceSectionModel} from '../../model/experience-section-model';

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
  sectionSelected = output<ExperienceSectionModel>();

  ngOnInit(): void {
    this.emitEventAboutSectionSelected(this.currentSectionIndex());
  }

  onSectionIndexSelected(number: number) {
    this.currentSectionIndex.set(number);
    localStorage.setItem('currentSectionIndex', number.toString());
    this.emitEventAboutSectionSelected(number);
  }

  private emitEventAboutSectionSelected(number: number) {
    this.sectionSelected.emit(this.sections()[number])
  }
}
