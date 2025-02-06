import { Component } from '@angular/core';
import { AppstorageserviceService } from '../appstorageservice.service';
import { DARKMODE_STORAGE } from '../appconstant';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  paletteToggle = false;
  constructor(private appStorage: AppstorageserviceService) {}

  async ionViewDidEnter()  {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const darkMode = await this.appStorage.get("theme");
    if (darkMode !== null) {
      document.documentElement.classList.toggle('ion-palette-dark', darkMode);
      this.paletteToggle = darkMode;
    } else {
      document.documentElement.classList.toggle('ion-palette-dark', prefersDark.matches);
      this.paletteToggle = prefersDark.matches;
    }
  }

  toggleChange(event: CustomEvent) {
    this.toggleDarkPalette(event.detail.checked);
  }
  toggleDarkPalette(shouldAdd: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
    this.appStorage.set(DARKMODE_STORAGE, shouldAdd);
  }
}
