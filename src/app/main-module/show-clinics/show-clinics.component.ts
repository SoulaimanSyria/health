import { Component, OnInit } from '@angular/core';
import { Clinic } from '../clinic';
import { MatTableDataSource } from '@angular/material/table';
import { HealthServiceService } from '../health-service.service';
import { extend } from 'webdriver-js-extender';
import { ComponentBase } from '../../component-base';
import { MatDialog } from '@angular/material';
import { AddClinicComponent } from '../add-clinic/add-clinic.component';

@Component({
  selector: 'app-show-clinics',
  templateUrl: './show-clinics.component.html',
  styleUrls: ['./show-clinics.component.css']
})
export class ShowClinicsComponent extends ComponentBase implements OnInit {
  constructor(private service:HealthServiceService, public dialog: MatDialog) {
    super(dialog);
  }

  dataSource: MatTableDataSource<Clinic>;
  displayedColumns = ['name','description','actions'];
  cilnics:Clinic[]=[];
  
  ngOnInit() {
    this.dataSource = new   MatTableDataSource<Clinic>();
    this.loadData();

  }
  loadData(){
    this.service.GetClinics().subscribe(res=>{
      
      this.dataSource.data = res;
      console.log(this.dataSource.data);
    });
  }
  addClinic(){
    this.OpenDialog(AddClinicComponent,{data:undefined}).afterClosed().subscribe(res=>{
      if(res){
        this.service.AddClinic(res).subscribe(addRes=>{
          this.loadData();
        });
      }
    });
  }
  editClinic(row:Clinic){
    this.OpenDialog(AddClinicComponent,{data:row}).afterClosed().subscribe(res=>{
      if(res){
        this.service.EditClinic(res).subscribe(addRes=>{
          this.loadData();
        });
      }
    });
  }
  deleteClinic(id){
    this.service.DeleteClinics(id).subscribe(res=>{
      this.loadData();
    });
  }
}
