import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { setDOM } from '@angular/platform-browser/src/dom/dom_adapter';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  
  { path: '', component: HomePageComponent },
  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
