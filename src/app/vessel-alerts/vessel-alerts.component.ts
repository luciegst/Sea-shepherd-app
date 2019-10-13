import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vessel-alerts',
  templateUrl: './vessel-alerts.component.html',
  styleUrls: ['./vessel-alerts.component.css']
})
export class VesselAlertsComponent implements OnInit {
@Input() vessel;
@Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
