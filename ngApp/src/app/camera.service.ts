import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class CameraService {
  // specify My access URL to the Back-end 

  private _account = 'http://localhost:3000/api/account';
  private _choiceUrl='http://localhost:3000/api/choice';
  public _displaySettingUrl = "http://localhost:3000/api/setting";
  private _addCameraUrl = "http://localhost:3000/api/addCamera";
  private _updateCameraUrl = "http://localhost:3000/api/update-setting";
  
  constructor( private http : HttpClient, private _router: Router) { }
  

getChoice(id){ //I send to the back-end the choice who match with ID
  return this.http.get<any>(this._choiceUrl + '/' + id)
}


addCamera(objectChoice){ // I send my choice into objectChoice 
  return this.http.post<any>(this._addCameraUrl, objectChoice)
}

removeSetting(markCamera,modelCamera,typePhoto , placePhoto){ // I remove my setting end put my information how delet it into th  
  return this.http.delete<any>(this._displaySettingUrl+'/'+ markCamera +'/'+ modelCamera+'/'+ typePhoto+'/'+ placePhoto)
 }

 displaySettingByBrand(brand){ 
  return this.http.get<any>(this._displaySettingUrl+ '/' + brand)
}
 updateCamera(data){  // I return the data camera information that will uddate into the back-end 
   return this.http.post<any>(this._updateCameraUrl,data )
 }



}
