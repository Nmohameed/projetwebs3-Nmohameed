import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CameraService } from '../camera.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-update-setting',
  templateUrl: './update-setting.component.html',
  styleUrls: ['./update-setting.component.css']
})
export class UpdateSettingComponent implements OnInit {


  newObjectChoice = {
    "creator": "",
    "mark": '',
    'model': '',
    'type': '',
    'place': '',
  }

  brands = ["nikon", "canon"]
  models = ["550D", "6D", "70D", "D850", "D7500", "D500"]
  photoTypes = ["Portrait", "Landscape", "Sport" , "Black and White", "Dance Photography" , "Food Photography"]
  locations = ["Conference and meeting rooms", "Well-lit apartment", "Well lit street", "Full moon night"]

  constructor(private _router: Router, public _camera: CameraService) { }

  ngOnInit() {
  }

  updateCamera() {
    let mark = localStorage.getItem('mark') //get and put the mark to localStorage into mark variable
    let model = localStorage.getItem('model')
    let type = localStorage.getItem('type')
    let place = localStorage.getItem('place')
    let creator = localStorage.getItem('id')
    this.newObjectChoice.creator = creator; // update the information 
    this.newObjectChoice.mark = mark;
    this.newObjectChoice.model = model;
    this.newObjectChoice.type = type;
    this.newObjectChoice.place = place;
    this._camera.updateCamera(this.newObjectChoice)
      .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
      )
  }

  refresh() {
    window.location.href = "/setting"
  }
}