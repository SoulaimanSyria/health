import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-home-page',
  templateUrl: './first-home-page.component.html',
  styleUrls: ['./first-home-page.component.css']
})
export class FirstHomePageComponent implements OnInit {
  title = 'Health System ';

  constructor(private routee:ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }
  routeLogin(){
    this.router.navigate(['/login'], {relativeTo:this.routee});
  }
  routeRegister(){
    this.router.navigate(['/reg_doctor'], {relativeTo:this.routee});
  }
}
