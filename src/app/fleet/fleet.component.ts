import { Component, OnInit, OnDestroy } from '@angular/core';
import { VesselModel } from '../vessel-model';
import { VesselService } from '../vessel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit, OnDestroy {
  vessels: VesselModel[];
  private subscription: Subscription;

  constructor(
    private vesselService: VesselService
  ) { }

  ngOnInit() {
    this.getVessels();
  }

  getVessels(): void {
    this.subscription = this.vesselService.getVessels()
    .subscribe(vessels => this.vessels = vessels)
  }

  share(){
    window.alert('This vessel has been shared')
  }
  
  onNotify() {
    window.alert('You are notified because the vessel is retired');
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}
