import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ServiceNasaService } from './service-nasa.service';
import { Observable } from 'rxjs';

describe('ServiceNasaService', () => {
  let service: ServiceNasaService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [ServiceNasaService]
  }));

  it('should be created', () => {
    const service: ServiceNasaService = TestBed.get(ServiceNasaService);
    expect(service).toBeTruthy();
  });


});
