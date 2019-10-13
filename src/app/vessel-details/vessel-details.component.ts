import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VesselModel } from '../vessel-model';
import { VesselService } from '../vessel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vessel-details',
  templateUrl: './vessel-details.component.html',
  styleUrls: ['./vessel-details.component.css']
})
export class VesselDetailsComponent implements OnInit, OnDestroy {
vessel : VesselModel;
private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private vesselService: VesselService,
  ) { }

  ngOnInit(): void {
    this.getVessel();
  }

  getVessel(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscription =  this.vesselService.getVessel(id)
    .subscribe(vessel => this.vessel = vessel);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
