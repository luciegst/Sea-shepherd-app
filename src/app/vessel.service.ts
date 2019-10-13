import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VesselModel } from './vessel-model';
import { vessels } from './vessels';

@Injectable({
  providedIn: 'root'
})
export class VesselService {

  constructor() { }

  //get all vessels//
  getVessels(): Observable<VesselModel[]>{
    return of(vessels)
  }

  //get vessel by id//
  getVessel(id: number): Observable<VesselModel>{
    return of(vessels.find(vessel => vessel.id === id))
  }

}

