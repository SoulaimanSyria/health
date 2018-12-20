import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { MatTableDataSource } from '@angular/material';
import { HealthServiceService } from '../health-service.service';

@Component({
  selector: 'app-show-doctors',
  templateUrl: './show-doctors.component.html',
  styleUrls: ['./show-doctors.component.css']
})
export class ShowDoctorsComponent implements OnInit {
  dataSource: MatTableDataSource<Doctor>;
  displayedColumns = ['uName','fName','lName','cName'];
  doctors:Doctor[]=[];
  fNameFilter:string="";
  lNameFilter:string="";
  constructor(private service:HealthServiceService) { }

  ngOnInit() {
    this.dataSource = new   MatTableDataSource<Doctor>();
    this.loadData();
  }
  loadData(){
    this.service.GetDoctors().subscribe(res=>{
      console.log(res);
      this.doctors = res;
      this.dataSource.data = res;
    });
  }
  applyFilterFName(){
    console.log(this.fNameFilter);
    this.dataSource.data = this.doctors.filter(doctor => 
      (
       (doctor.firstName.toLocaleLowerCase().includes(this.fNameFilter.trim().toLocaleLowerCase()) || this.fNameFilter === "")
        && (doctor.lastName.toLocaleLowerCase().includes(this.lNameFilter.trim().toLocaleLowerCase()) || this.lNameFilter === "")
    ));
  }
}
