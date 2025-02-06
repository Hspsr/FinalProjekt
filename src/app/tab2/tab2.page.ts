import { Component } from '@angular/core';
import { Film } from '../model/film';
import { AppstorageserviceService } from '../appstorageservice.service';
import { FILMS_STORAGE } from '../appconstant';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  films: Film[] = [];
  watchedfilms: Film[] = [];
  plannedfilms: Film[] = [];

  constructor(private appStorage: AppstorageserviceService) {}

  async ionViewDidEnter()  {
    const loaded_films = await this.appStorage.get(FILMS_STORAGE);
    if (loaded_films) {
      this.films = loaded_films;
    } else {
      this.generateDefault();
    }
    this.updateLists();
  }

  private generateDefault() {
    this.films = [
      new Film("Sám Doma", false, 103),
      new Film("Sám Doma 2", true, 115),
      new Film("Sám Doma 3", false, 98)
    ];
  }

  togglewatched(film: Film) {
    film.watched = !film.watched;
    this.updateLists();
  }

  updateLists() {
    this.plannedfilms = this.films.filter(film => !film.watched);
    this.watchedfilms = this.films.filter(film => film.watched);
    this.appStorage.set(FILMS_STORAGE, this.films);
  }
}
