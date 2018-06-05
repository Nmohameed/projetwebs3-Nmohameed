import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { Component } from '@angular/core/src/metadata/directives';
import { AddcameraComponent } from './addcamera/addcamera.component';
import { SettingForUserComponent } from './setting-for-user/setting-for-user.component';
import { UpdateSettingComponent } from './update-setting/update-setting.component';

  //specify the URL wich matches with the component  
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },

  {
    path: 'addCamera',
    component: AddcameraComponent
  },
  {
    path: 'setting',
    component: SettingForUserComponent
  },
  {
    path: 'update-setting',
    component: UpdateSettingComponent
  },

  // set the home page that is setting
  {
    path: '',
    redirectTo: '/setting',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
