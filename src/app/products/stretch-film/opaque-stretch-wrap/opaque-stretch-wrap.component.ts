import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opaque-stretch-wrap',
  templateUrl: './opaque-stretch-wrap.component.html',
  styleUrls: ['./opaque-stretch-wrap.component.scss']
})
export class OpaqueStretchWrapComponent implements OnInit {
  constructor() {}

  opaqueStretchWrap = [
    {
      productNumber: 'WP-MS1880B',
      color: 'black',
      width: '18" x 80 Gauge',
      rollsPerCase: '4',
      casePerPallet: '48'
    }
  ];

  ngOnInit() {}
}
