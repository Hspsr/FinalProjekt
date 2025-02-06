import { Component } from '@angular/core';
import { Film } from '../model/film';

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

  constructor() {}

  async ionViewDidEnter()  {
    this.generateDefault();
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
  }
}
