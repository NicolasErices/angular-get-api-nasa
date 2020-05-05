import { Component, OnInit } from '@angular/core';
import { ServiceNasaService } from './services/service-nasa.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  curiosity: any
  photos: any
  constructor(private ServiceNasaService: ServiceNasaService){
    
  }
  ngOnInit(){
    this.getData()
  }
  getData(){
    this.ServiceNasaService.getDataNasa().subscribe(data =>{
      this.curiosity = data
      console.log(this.curiosity.photos)
    })
  }
}
