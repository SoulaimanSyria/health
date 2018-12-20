import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../main-module/doctor';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthServiceService } from '../../main-module/health-service.service';
import { Clinic } from '../../main-module/clinic';

@Component({
  selector: 'app-reg-doctor',
  templateUrl: './reg-doctor.component.html',
  styleUrls: ['./reg-doctor.component.css']
})
export class RegDoctorComponent implements OnInit {
  model:Doctor;
  hide:boolean=true;
  confirmationPassword:string;
  match:boolean=true;
  clinics:Clinic[]=[];
  constructor(private routee:ActivatedRoute,private router: Router,private service:HealthServiceService) { 
    this.model=new Doctor;
  }

  ngOnInit() {
    this.service.GetClinics().subscribe(res=>{
      this.clinics = res;
    });
  }
  matchFunc(){
    
    this.match = this.model.password===this.confirmationPassword;
    console.log(this.match);
    return this.match;
  }
  matchFuncd(){
    
    this.match = this.model.password===this.confirmationPassword;
    console.log(this.match);
    return this.match;
  }
  register(){
    this.service.Register(this.model).subscribe(res=>{
      this.router.navigate(['/login'], {relativeTo:this.routee});
    });
    
    
  }

}
