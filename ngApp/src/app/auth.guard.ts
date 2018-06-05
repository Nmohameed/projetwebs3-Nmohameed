import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service';
import{ Router } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private _auth: AuthService,
    private _router: Router) { }

    canActivate(): boolean{
      if (this._auth.loggedIn()) {
        return true
      } else {
        this._router.navigate(["/login"])
        return false
      }
    }

  }  
