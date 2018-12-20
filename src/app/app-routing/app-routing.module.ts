import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../sing-up/login/login.component';
import { AppComponent } from '../app.component';
import { HomePageComponent } from '../main-module/home-page/home-page.component';
import { FirstHomePageComponent } from '../first-home-page/first-home-page.component';
import { RegDoctorComponent } from '../sing-up/reg-doctor/reg-doctor.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome',  pathMatch: 'full'},
  { path: 'welcome', component: FirstHomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'reg_doctor', component: RegDoctorComponent }


];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
