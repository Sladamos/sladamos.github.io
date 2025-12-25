import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection
} from '@angular/core';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling
} from '@angular/router';

import {routes} from './app.routes';
import {ThemeService} from './core/shared/service/theme.service';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled'
}

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, inMemoryScrollingFeature),
    provideAppInitializer(() => {
      const themeService = inject(ThemeService);
      themeService.applyTheme();
    })
  ]
};
