import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../../main-module/home-page/home-page.component';
import { RegDoctorComponent } from '../reg-doctor/reg-doctor.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'reg_doctor', component: RegDoctorComponent }

  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
