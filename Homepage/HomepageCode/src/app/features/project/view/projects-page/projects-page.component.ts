import { ChangeDetectionStrategy, Component } from '@angular/core';
import {SearchBarComponent} from '../../../shared/view/search-bar/search-bar.component';

@Component({
  selector: 'app-projects-page',
  imports: [
    SearchBarComponent
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPageComponent {

}
