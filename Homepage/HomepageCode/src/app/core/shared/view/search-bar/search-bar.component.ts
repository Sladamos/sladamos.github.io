import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faRemove, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  imports: [FaIconComponent, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  placeholder = input<string>('');
  searchChange = output<string>();
  searchQuery = '';
  protected readonly faSearch = faSearch;
  protected readonly faRemove = faRemove;

  onSearchChange() {
    this.searchChange.emit(this.searchQuery);
  }

  onRemoveClicked() {
    this.searchQuery = '';
    this.onSearchChange();
  }

  onSearchClicked() {
    this.onSearchChange();
  }
}
