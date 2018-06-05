import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { FlashMessage } from 'angular-flash-message';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor(public _auth: AuthService,
    public _router: Router) { }

  ngOnInit() {

  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
      res => {
        console.log(res)
        this._router.navigate(['/setting'])
        localStorage.setItem('id', res._id)

      },
      err => console.log(err)
      )

  }


}
