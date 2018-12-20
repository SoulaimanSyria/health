import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainModuleModule } from './main-module/main-module.module';
import { SingUpModule } from './sing-up/sing-up.module';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { APP_CONFIG, AppConfiguration } from './app-config-var';
import { FirstHomePageComponent } from './first-home-page/first-home-page.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    FirstHomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModuleModule,
    HttpClientModule, 
    SingUpModule,
    MatButtonModule,
    MatDialogModule
    
  ],
  
  providers: [{ provide: APP_CONFIG, useValue: AppConfiguration }],
  bootstrap: [AppComponent]
})
export class AppModule { }
