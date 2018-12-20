import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthServiceService } from '../../main-module/health-service.service';
import { AuthenticationData } from '../../authentication-data';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  hide:boolean=true;
  constructor(private routee:ActivatedRoute,private router: Router,private service:HealthServiceService,public snackBar: MatSnackBar) { }
  authenticate:AuthenticationData;
  ngOnInit() {
    this.authenticate = new AuthenticationData;
  }
  login(){
    this.service.login(this.username,this.password).subscribe(res=>{
      console.log(res);
      if(res.userName){
        this.authenticate.isAdmin = res.isAdmin;
        this.authenticate.userName = res.userName;
        this.authenticate.loggedIn = true;
        localStorage.setItem('authentication', JSON.stringify(this.authenticate));
        this.router.navigate(['/home'], {relativeTo:this.routee});
      }
      else{
        this.snackBar.open("User name or password is incorrect","",{duration:2000});
      }
    });
    
  }
  register(){
    this.router.navigate(['/reg_doctor'], {relativeTo:this.routee});
  }
}
