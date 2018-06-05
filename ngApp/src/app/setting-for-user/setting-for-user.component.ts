import { Component, OnInit } from '@angular/core';
import { CameraService } from '../camera.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-for-user',
  templateUrl: './setting-for-user.component.html',
  styleUrls: ['./setting-for-user.component.css']
})
export class SettingForUserComponent implements OnInit {
  selectedLocation;
  selectedBrand;

  allBrands = "all";
  Mychoices = [];
  UserData = {
    "creator": ""
  }
  locations = ["Conference and meeting rooms", "Well-lit apartment", "Well lit street", "Full moon night"]
  brands = ["nikon", "canon"]


  constructor(private _cameraService: CameraService, private _router: Router) { }


getData(markCamera, modelCamera, typePhoto, placePhoto){
  localStorage.setItem("mark" , markCamera );
  localStorage.setItem("model" , modelCamera );
  localStorage.setItem("type" , typePhoto );
  localStorage.setItem("place" , placePhoto );

}

  removeSetting(markCamera, modelCamera, typePhoto, placePhoto) {
    this._cameraService.removeSetting(markCamera, modelCamera, typePhoto, placePhoto)
      .subscribe(
      res => console.log(res),
      err => console.log(err)
      )
  }

  ngOnInit() {
    this._cameraService.displaySettingByBrand(this.allBrands)
      .subscribe(
      res => this.Mychoices = res,
      err => console.log(err)
      )
  }

  onSelectLocation(location: string) {
    this.selectedLocation = location;
  }

  onSelectedBrand(brand: string) {
    this.selectedBrand = brand;
  }

  clearLocation() {
    if (this.selectedLocation) {
      this.selectedLocation = ''; //clear the sort by location and display all the cameraSetting
    }
  }

  clearBrand() {
    if (this.selectedBrand) {
      this.selectedBrand = '';
    }
  }

  refresh() {
    window.location.href = "/setting"
  }

}
