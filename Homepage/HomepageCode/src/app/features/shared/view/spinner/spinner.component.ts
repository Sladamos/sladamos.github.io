import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-spinner',
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements AfterViewInit {
  @ContentChildren('spinnerChild', { descendants: true }) children!: QueryList<ElementRef>;
  @ViewChild('spinnerFront', { static: true }) spinnerFront!: ElementRef<HTMLDivElement>;
  @ViewChild('spinnerBack', { static: true }) spinnerBack!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const firstChild = this.children.first.nativeElement;
    const secondChild = this.children.toArray()[1]?.nativeElement;

    this.spinnerFront.nativeElement.appendChild(firstChild);
    this.spinnerBack.nativeElement.appendChild(secondChild);
  }
}
