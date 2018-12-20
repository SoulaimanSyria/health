import { Component, OnInit, Inject } from '@angular/core';
import { HealthServiceService } from '../health-service.service';
import { Clinic } from '../clinic';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent implements OnInit {
  model:Clinic;
  constructor(service:HealthServiceService,public dialogRef:MatDialogRef<AddClinicComponent>,@Inject(MAT_DIALOG_DATA)public data:any) { }

  ngOnInit() {
    this.model = new Clinic;
    if(this.data){
      this.model.clinicId = this.data.data.clinicId;
      this.model.clinicDescription = this.data.data.clinicName;
      this.model.clinicName = this.data.data.clinicDescription;
      console.log(this.data);

    }
  }
  add(){
    this.dialogRef.close(this.model);
  }
  cancel(){
    this.dialogRef.close();
  }

}
