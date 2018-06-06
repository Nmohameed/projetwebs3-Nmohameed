import { Component } from '@angular/core';
import{ AuthService } from './auth.service'
import {Router} from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor(private _authservice : AuthService ,  public _router: Router){}

}

