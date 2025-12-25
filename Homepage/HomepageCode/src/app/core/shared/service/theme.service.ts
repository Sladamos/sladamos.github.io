import {Injectable, signal} from '@angular/core';
import {AppTheme} from '../model/app-theme';

@Injectable({providedIn: 'root'})
export class ThemeService {

  private readonly _theme = signal<AppTheme>(this.determineTheme());
  readonly theme = this._theme.asReadonly();

  applyTheme(): void {
    const id = 'season-theme';
    let link = document.getElementById(id) as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    link.href = `themes/${this.theme()}-theme.css`;
  }

  private determineTheme(): AppTheme {
    const month = new Date().getMonth() + 1;
    if ([12, 1, 2].includes(month)) return AppTheme.WINTER;
    if ([3, 4, 5].includes(month)) return AppTheme.SPRING;
    if ([6, 7, 8].includes(month)) return AppTheme.SUMMER;
    return AppTheme.FALL;
  }
}
