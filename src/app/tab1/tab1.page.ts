import { Component } from '@angular/core';
import { AppstorageserviceService } from '../appstorageservice.service';
import { DARKMODE_STORAGE } from '../appconstant';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

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
}
