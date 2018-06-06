import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CameraService } from '../camera.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-addcamera',
  templateUrl: './addcamera.component.html',
  styleUrls: ['./addcamera.component.css']
})
export class AddcameraComponent implements OnInit {

  objectChoice = {
    "creator": ""
  }

  brands = ["Nikon", "Canon"]
  models = ["550D", "6D", "70D", "D850", "D7500", "D500"]
  photoTypes = ["Portrait", "Landscape", "Sport" , "Black and White", "Dance Photography" , "Food Photography"]
  locations = ["Conference and meeting rooms", "Well-lit apartment", "Well night street", "Full moon night"]

  constructor(private _router: Router, public _camera: CameraService) { }

  ngOnInit() {
  }

  addCamera() {

    let creator = localStorage.getItem('id')
    this.objectChoice.creator = creator; // set the id to local storage into the varible creator that will specify the right objectChoice how match with this id 
    this._camera.addCamera(this.objectChoice)
      .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
      )
  }
  refresh() {
    window.location.href = "/setting" //after adding camera refresh the page setting
  }
}
