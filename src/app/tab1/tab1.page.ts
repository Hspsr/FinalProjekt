import { Component } from '@angular/core';
import { AppstorageserviceService } from '../appstorageservice.service';
import { DARKMODE_STORAGE } from '../appconstant';
import { FILMS_STORAGE } from '../appconstant';
import { Film } from '../model/film';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  newFilm: Film = new Film('', false,null);

  constructor(private appStorage: AppstorageserviceService) {}

  async ionViewDidEnter()  {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const darkMode = await this.appStorage.get("theme");
    if (darkMode !== null) {
      document.documentElement.classList.toggle('ion-palette-dark', darkMode);
    } else {
      document.documentElement.classList.toggle('ion-palette-dark', prefersDark.matches);
    }
  }

  async addFilm() {
    const loaded_films = await this.appStorage.get(FILMS_STORAGE);
    loaded_films.push(this.newFilm);
    this.appStorage.set(FILMS_STORAGE, loaded_films);
    this.resetForm();
  }

  resetForm() {
    this.newFilm = new Film('', false,null);
  }
}
