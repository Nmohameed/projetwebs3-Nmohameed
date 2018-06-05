import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  // specify My access URL to the Back-end 
  private _registerURL = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _accountUrl = "http://localhost:3000/api/account"

  constructor(private http: HttpClient,
    private _router: Router) { }

    registerUser(user){
      return this.http.post<any>(this._registerURL, user)
    }

    loginUser(user){
      return this.http.post<any>(this._loginUrl, user)
    }

    loggedIn(){
      return !!localStorage.getItem('id') //check if the ID in the  local Storage
    }

    logoutUser(){
      localStorage.removeItem('id') //remove the ID to the local storage
      this._router.navigate(['/login']) // after logout i will navigate to login page
    }

    removeUser(id){
      return this.http.delete<any>(this._accountUrl) 
    }

    updateUser(user){
      return this.http.put<any>(this._accountUrl,user )
    }


  
  }