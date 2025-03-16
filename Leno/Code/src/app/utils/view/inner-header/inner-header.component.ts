import { Component, Input } from '@angular/core';

@Component({
  selector: 'inner-header',
  standalone: true,
  imports: [],
  templateUrl: './inner-header.component.html',
  styleUrl: './inner-header.component.css'
})
export class InnerHeaderComponent {

  @Input() title: String = "Default";

}
