import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

// for GPS
/*
npm install @capacitor/geolocation
npx cap sync 
*/

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  latitude: any;
  longitude: any;

  constructor() {}

  async handleLocateMe() {
    const coordinates = await Geolocation.getCurrentPosition();

    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }
}
