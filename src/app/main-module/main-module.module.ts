import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule }   from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { SingUpModule } from '../sing-up/sing-up.module';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ShowClinicsComponent } from './show-clinics/show-clinics.component';
import {MatTableModule} from '@angular/material/table';
import { HealthServiceService } from './health-service.service';
import { ShowDoctorsComponent } from './show-doctors/show-doctors.component';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    SingUpModule,
    MatTableModule,
    MatTabsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule
    
  ],
  declarations: [HomePageComponent, AddClinicComponent, AddDoctorComponent, ShowClinicsComponent, ShowDoctorsComponent],
  entryComponents:[AddClinicComponent],
  providers: [HealthServiceService]
})
export class MainModuleModule { }
