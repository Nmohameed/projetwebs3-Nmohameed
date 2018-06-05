import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { CameraService} from './camera.service';
import { AccountComponent } from './account/account.component';
import { AddcameraComponent } from './addcamera/addcamera.component';
import { SettingForUserComponent } from './setting-for-user/setting-for-user.component';
import { UpdateSettingComponent } from './update-setting/update-setting.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    AddcameraComponent,
    SettingForUserComponent,
    UpdateSettingComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService, CameraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
