import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { SectionModel } from '../../model/section-model';
import { MathService } from '../../service/math.service';

@Component({
  selector: 'app-section-selector',
  imports: [NgClass],
  templateUrl: './section-selector.component.html',
  styleUrl: './section-selector.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionSelectorComponent {
  mathService: MathService = inject(MathService);
  sections = input.required<SectionModel[]>();
  currentSectionIndex = input.required<number>();
  nextSectionIndex = computed(() => this.calculateNext(this.currentSectionIndex()));
  previousSectionIndex = computed(() => this.calculatePrevious(this.currentSectionIndex()));
  isAnimating = false;
  animationState: 'disappear' | '' = '';
  sectionNumberSelected = output<number>();

  onNextSectionClicked() {
    if (!this.isAnimating) {
      this.triggerAnimation(() => {
        this.sectionNumberSelected.emit(this.calculateNext(this.currentSectionIndex()));
      });
    }
  }

  onPreviousSectionClicked() {
    if (!this.isAnimating) {
      this.triggerAnimation(() => {
        this.sectionNumberSelected.emit(this.calculatePrevious(this.currentSectionIndex()));
      });
    }
  }

  private triggerAnimation(callback: () => void) {
    this.isAnimating = true;
    this.animationState = 'disappear';
    setTimeout(() => {
      callback();
      this.animationState = '';
      setTimeout(() => {
        this.isAnimating = false;
      }, 200);
    }, 200);
  }

  private calculateNext(val: number): number {
    return this.mathService.mod(val + 1, this.sections().length);
  }

  private calculatePrevious(val: number): number {
    return this.mathService.mod(val - 1, this.sections().length);
  }
}
