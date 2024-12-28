import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  InputSignal,
  OnInit,
  output,
  signal
} from '@angular/core';
import {ExperienceSectionModel} from '../../model/experience-section-model';
import {NgClass} from '@angular/common';
import {MathService} from '../../../shared/service/math.service';

@Component({
  selector: 'app-experience-sections',
  imports: [
    NgClass
  ],
  templateUrl: './experience-sections.component.html',
  styleUrl: './experience-sections.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceSectionsComponent implements OnInit {
  //TODO: refactor - remove event, move currentSectionIndex to signal
  mathService: MathService = inject(MathService);
  sections: InputSignal<ExperienceSectionModel[]> = input.required<ExperienceSectionModel[]>();
  currentSectionIndex = signal(parseInt(localStorage.getItem('currentSectionIndex') || '0', 10));
  nextSectionIndex = computed(() => this.calculateNext(this.currentSectionIndex()))
  previousSectionIndex = computed(() => this.calculatePrevious(this.currentSectionIndex()))
  isAnimating = false;
  animationState: 'disappear' | '' = '';
  onSectionSelected = output<ExperienceSectionModel>();

  ngOnInit(): void {
    this.emitEventAboutSectionSelected(this.currentSectionIndex());
  }

  onNextSectionClicked() {
    if (!this.isAnimating) {
      this.triggerAnimation(() => {
        this.updateSectionIndex(this.calculateNext(this.currentSectionIndex()));
      });
    }
  }

  onPreviousSectionClicked() {
    if (!this.isAnimating) {
      this.triggerAnimation(() => {
        this.updateSectionIndex(this.calculatePrevious(this.currentSectionIndex()));
      });
    }
  }

  private updateSectionIndex(number: number) {
    this.currentSectionIndex.set(number);
    localStorage.setItem('currentSectionIndex', number.toString());
    this.emitEventAboutSectionSelected(number);
  }

  private emitEventAboutSectionSelected(number: number) {
    this.onSectionSelected.emit(this.sections()[number])
  }

  private triggerAnimation(callback: () => void) {
    this.isAnimating = true;
    this.animationState = "disappear";
    setTimeout(() => {
      callback();
      this.animationState = '';
      setTimeout(() => {
        this.isAnimating = false;
      }, 200);
    }, 200);
  }

  private calculateNext(val: number): number {
    return this.mathService.mod(val + 1, this.sections().length)
  }

  private calculatePrevious(val: number): number {
    return this.mathService.mod(val - 1, this.sections().length)
  }
}
