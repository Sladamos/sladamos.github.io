import {Injectable, signal} from '@angular/core';
import {HobbyModel} from '../model/hobby-model';
import {faBook} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  hobbies = signal<HobbyModel[]>([
    {
      name: 'Lego',
      customIcon: 'logo_lego.png',
      items: [
        {
          name: 'The Insect Collection',
          image: 'lego_insectCollection.png',
        },
        {
          name: 'Imperial Probe Droid',
          image: 'lego_probeDroid.png',
        },
        {
          name: 'Orchid',
          image: 'lego_orchid.png',
        },
        {
          name: 'Tantive IV',
          image: 'lego_tantiveIV.png',
        },
        {
          name: 'Stich',
          image: 'lego_stich.png',
        },
        {
          name: 'Tiny Plants',
          image: 'lego_tinyPlants.png',
        },
        {
          name: 'Capitan Rex Helmet',
          image: 'lego_rex.png',
        },
        {
          name: 'Darth Vader Helmet',
          image: 'lego_vader.png',
        },
        {
          name: 'Commander Cody Helmet',
          image: 'lego_cody.png',
        }
      ]
    },
    {
      name: 'Books',
      faIcon: faBook,
      items: [
        {
          name: 'The Witcher',
          image: 'books_witcher.png',
        },
        {
          name: 'The Lord of the Rings',
          image: 'books_lotr.png',
        },
        {
          name: 'The Chronicles of Narnia',
          image: 'books_narnia.png',
        },
        {
          name: 'Dune',
          image: 'books_dune.png',
        },
        {
          name: 'Sylvanas',
          image: 'books_sylvanas.png',
        },
        {
          name: 'Runaway Max',
          image: 'books_runawayMax.png',
        },
        {
          name: 'With Fire and Sword',
          image: 'books_fireAndSword.png',
        },
        {
          name: 'Hound\'s Hill',
          image: 'books_houndsHill.png',
        },
      ]
    },/*,
    {
      name: 'Games',
      faIcon: faHatWizard
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
    }*/
  ]);

  constructor() { }
}
