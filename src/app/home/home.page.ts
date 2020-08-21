import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

const cameraPreviewOpts: CameraPreviewOptions = {
  x: 0,
  y: 200,
  width: window.screen.width,
  height: window.screen.height/2,
  camera: 'rear',
  tapPhoto: true,
  tapFocus: true,
  previewDrag: false,
  toBack: false,
  alpha: 1
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {


  constructor(private cameraPreview: CameraPreview) { }

  snapImage() {
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  switchCamera() {
    this.cameraPreview.switchCamera();
  }

  stopCamera() {
    this.cameraPreview.stopCamera();
  }

  ngOnInit() {
    this.stopCamera();
  }
}