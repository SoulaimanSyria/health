import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG } from '../app-config-var';
import { AppConfig } from '../app-config';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Clinic } from './clinic';
import { Doctor } from './doctor';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthenticationData } from '../authentication-data';

@Injectable()
export class HealthServiceService {
  private healthApiUrl: string;
  constructor(private http: HttpClient, @Inject(APP_CONFIG) config: AppConfig) { 
    this.healthApiUrl = config.apiBaseUrl + 'api/Health';
  }
  AddClinic(model:Clinic):Observable<any>{
    return this.http.post(this.healthApiUrl+'/AddClinic',model);

  }
  EditClinic(model:Clinic):Observable<any>{
    return this.http.put(this.healthApiUrl+'/UpdateClinic',model);

  }
  GetClinics():Observable<any>{
    return this.http.get(this.healthApiUrl+'/AllClinics');

  }
  DeleteClinics(id):Observable<any>{
    console.log(id);
    return this.http.delete(this.healthApiUrl+'/DeleteClinic?docId='+id);

  }
  GetDoctors():Observable<any>{
    return this.http.get(this.healthApiUrl+'/AllDoctors');

  }
  Register(model:Doctor):Observable<any>{
    return this.http.post(this.healthApiUrl+'/AddDoctor',model);

  }
  
  login(uName,password): Observable<any> {
    return this.http.get(this.healthApiUrl+'/Login?userName='+uName+'&&password='+password,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }});    
  }
}
