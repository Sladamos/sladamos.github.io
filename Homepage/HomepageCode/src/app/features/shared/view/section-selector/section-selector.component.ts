import {ChangeDetectionStrategy, Component, computed, inject, input, output,} from '@angular/core';
import {MathService} from '../../service/math.service';
import {ExperienceSectionModel} from '../../../experience/model/experience-section-model';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-section-selector',
  imports: [
    NgClass
  ],
  templateUrl: './section-selector.component.html',
  styleUrl: './section-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionSelectorComponent {
  mathService: MathService = inject(MathService);
  sections = input.required<ExperienceSectionModel[]>();
  currentSectionIndex = input.required<number>();
  nextSectionIndex = computed(() => this.calculateNext(this.currentSectionIndex()))
  previousSectionIndex = computed(() => this.calculatePrevious(this.currentSectionIndex()))
  isAnimating = false;
  animationState: 'disappear' | '' = '';
  onSectionNumberSelected = output<number>();

  onNextSectionClicked() {
    if (!this.isAnimating) {
      this.triggerAnimation(() => {
        this.onSectionNumberSelected.emit(this.calculateNext(this.currentSectionIndex()));
      });
    }
  }

  onPreviousSectionClicked() {
    if (!this.isAnimating) {
      this.triggerAnimation(() => {
        this.onSectionNumberSelected.emit(this.calculatePrevious(this.currentSectionIndex()));
      });
    }
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
