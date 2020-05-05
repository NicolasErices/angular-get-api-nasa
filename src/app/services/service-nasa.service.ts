import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceNasaService {

  constructor(private http: HttpClient) { 
    console.log(`${environment.getDataNasa()}`)
  }

  getDataNasa(){
    return this.http.get(`${environment.getDataNasa()}`)
  }

}
