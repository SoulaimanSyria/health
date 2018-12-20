import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../doctor';
import { AuthenticationData } from '../../authentication-data';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HealthServiceService } from '../health-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  doctorName:string="";
  authenticationData: BehaviorSubject<AuthenticationData>;
  isAdmin:boolean;
  loggedIn:boolean;
  constructor(private routee:ActivatedRoute,private router: Router,private service:HealthServiceService){

  }
  ngOnInit() {
    this.authenticationData = new BehaviorSubject(undefined);
    this.loadFromLocalStorage();
    
    this.authenticationData.subscribe(x => {
      if (x) {
        this.doctorName = x.userName;
        this.isAdmin = x.isAdmin;
        this.loggedIn = x.loggedIn;
      }
    });
  }
  loadFromLocalStorage() {
    let str = localStorage.getItem('authentication');
    if (str) {
      this.authenticationData.next(JSON.parse(str));
    }
  }
  logOut(){
    localStorage.removeItem('authentication');
    this.authenticationData.next(undefined);
    this.router.navigate(['/login'], {relativeTo:this.routee});

  }
}
