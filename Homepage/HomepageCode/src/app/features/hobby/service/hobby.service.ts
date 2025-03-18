import {Injectable, signal} from '@angular/core';
import {HobbyModel} from '../model/hobby-model';
import {faBook, faFilm, faHatWizard, faJedi, faMusic} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  hobbies = signal<HobbyModel[]>([
    {
      name: 'Lego',
      customIcon: 'logo_lego.png'
    },
    {
      name: 'Games',
      faIcon: faHatWizard
    },
    {
      name: 'Books',
      faIcon: faBook
    },
    {
      name: 'Movies',
      faIcon: faFilm
    },
    {
      name: 'Music',
      faIcon: faMusic
    },
    {
      name: 'Universes',
      faIcon: faJedi
    }
  ]);

  constructor() { }
}
