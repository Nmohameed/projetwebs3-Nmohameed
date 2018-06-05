import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent extends LoginComponent implements OnInit {

  UserData = {
    "id": ""
  }
  constructor(public http: HttpClient, public _auth: AuthService, public _router: Router) {
    super(_auth, _router)
  }



  removeUser() {
    let id = localStorage.getItem('id')
    this.http.delete<any>('http://localhost:3000/api/account/' + id) 
      .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
      )
    localStorage.removeItem('id')
    this._router.navigate(['/login'])

  }

  updateUser() {
    let id = localStorage.getItem('id')
    this.UserData.id = id; //set the id we will get him in local storage into userDate 

    this._auth.updateUser(this.UserData)
      .subscribe(
      res => {
        this._router.navigate(['/login'])
        console.log(res)
      },
      err => console.log(err)
      )


  }

  ngOnInit() {
  }

}
