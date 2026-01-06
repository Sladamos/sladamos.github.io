import {inject, Injectable, signal} from '@angular/core';
import {concatMap, from} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {ThemeService} from '../../shared/service/theme.service';
import {LoaderState} from '../model/app-loader-state';

interface LoaderStep {
  label: string;
  progress: number;
  action?: () => void;
}

@Injectable({providedIn: 'root'})
export class AppLoaderService {

  private themeService: ThemeService = inject(ThemeService);

  loadingFinished = signal(false);

  state = signal<LoaderState>({
    label: 'Initializing…',
    progress: 0
  });

  private STEP_TIME = 500;

  private readonly STORAGE_KEY = 'app_loader_done';

  private readonly steps: LoaderStep[] = [
    {
      label: 'Applying theme',
      progress: 0,
      action: () => this.themeService.applyTheme()
    },
    {
      label: 'Loading user preferences',
      progress: 25
    },
    {
      label: 'Preparing application shell',
      progress: 50
    },
    {
      label: 'Finalizing startup',
      progress: 100
    }
  ];

  private runStarted = false;

  run(): void {
    if (this.runStarted) return;
    this.runStarted = true;

    if (sessionStorage.getItem(this.STORAGE_KEY) === 'true') {
      this.STEP_TIME = 0;
    }

    from(this.steps).pipe(
      concatMap(step =>
        this.runStep(step).pipe(delay(this.STEP_TIME))
      )
    ).subscribe({
      complete: () => {
        this.loadingFinished.set(true);
        sessionStorage.setItem(this.STORAGE_KEY, 'true');
      }
    });
  }

  private runStep(step: LoaderStep) {
    return from([step]).pipe(
      tap(() => {
        this.state.set({
          label: step.label,
          progress: step.progress
        });
        step.action?.();
      })
    );
  }
}
