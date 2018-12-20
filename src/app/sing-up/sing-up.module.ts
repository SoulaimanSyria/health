import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { RegDoctorComponent } from './reg-doctor/reg-doctor.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,    
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  declarations: [LoginComponent, RegDoctorComponent]
})
export class SingUpModule { }
