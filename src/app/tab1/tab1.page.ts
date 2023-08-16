import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

// Camera setup
/*
https://capacitorjs.com/docs/apis/camera
https://ionicframework.com/docs/native/camera
npm install @capacitor/camera
npx cap sync
npm run build 
then,
// DO NOT FORGET TO INSTALL and SETUO for PWA 
npm install @ionic/pwa-elements
// refer main.ts for changes related to pwa
read more: https://capacitorjs.com/docs/web/pwa-elements
*/

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  imgSource: any;

  constructor() {}

  async handleTakePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imgSource = image.webPath;
  }

}
