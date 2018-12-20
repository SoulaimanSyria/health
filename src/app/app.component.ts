import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Health System ';
  constructor(private routee:ActivatedRoute,private router: Router){

  }
  ngOnInit() {
    console.log("erwerwerwe");
    this.router.navigate(['/welcome'], {relativeTo:this.routee});
  }
}

