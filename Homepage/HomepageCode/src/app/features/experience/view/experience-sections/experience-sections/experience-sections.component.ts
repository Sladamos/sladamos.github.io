import {Component, computed, inject, input, InputSignal, output, signal} from '@angular/core';
import {ExperienceSectionModel} from '../../../model/experience-section-model';
import {NgClass} from '@angular/common';
import {MathService} from '../../../../shared/service/math.service';

@Component({
  selector: 'app-experience-sections',
  imports: [
    NgClass
  ],
  templateUrl: './experience-sections.component.html',
  styleUrl: './experience-sections.component.css'
})
export class ExperienceSectionsComponent {

  mathService: MathService = inject(MathService);
  sections: InputSignal<ExperienceSectionModel[]> = input.required<ExperienceSectionModel[]>();
  currentSectionIndex = signal(0);
  nextSectionIndex = computed(() => this.calculateNext(this.currentSectionIndex()))
  previousSectionIndex = computed(() => this.calculatePrevious(this.currentSectionIndex()))
  isAnimating = false;
  animationState: 'disappear' | '' = '';
  onSectionSelected = output<ExperienceSectionModel>();

  onRightSectionClicked() {
    if (!this.isAnimating) {
      this.triggerAnimation(() => {
        this.currentSectionIndex.update((val) => this.calculateNext(val));
        this.onSectionSelected.emit(this.sections()[this.currentSectionIndex()])
      });
    }
  }

  onLeftSectionClicked() {
    if (!this.isAnimating) {
      this.triggerAnimation(() => {
        this.currentSectionIndex.update((val) => this.calculatePrevious(val));
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
