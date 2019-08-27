import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-stretch-wrap',
  templateUrl: './machine-stretch-wrap.component.html',
  styleUrls: ['./machine-stretch-wrap.component.scss']
})
export class MachineStretchWrapComponent implements OnInit {
  constructor() {}

  machineStretchWrap = [
    {
      productNumber: 'WP-MS2080',
      size: '20" x 5000',
      durability: '80 Gauge',
      rollsPerCase: '1',
      casePerPallet: '48'
    }
  ];

  ngOnInit() {}
}
