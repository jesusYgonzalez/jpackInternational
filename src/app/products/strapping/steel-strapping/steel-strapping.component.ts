import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steel-strapping',
  templateUrl: './steel-strapping.component.html',
  styleUrls: ['./steel-strapping.component.scss']
})
export class SteelStrappingComponent implements OnInit {
  constructor() {}

  steelStrapping = [
    {
      productNumber: 'ST-12020R',
      width: '1/2″',
      thickness: 0.02,
      breakStrength: '1,200 Lb.',
      approxLbsPerCoil: '100 Lb.'
    },
    {
      productNumber: 'ST-58020R',
      width: '5/8″',
      thickness: 0.02,
      breakStrength: '1,380 Lb.',
      approxLbsPerCoil: '100 Lb.'
    },
    {
      productNumber: 'ST-58023R',
      width: '5/8″',
      thickness: 0.023,
      breakStrength: '1725 Lb.',
      approxLbsPerCoil: '100 Lb.'
    },
    {
      productNumber: 'ST-34020R',
      width: '3/4″',
      thickness: 0.02,
      breakStrength: '1,800 Lb.',
      approxLbsPerCoil: '100 Lb.'
    },
    {
      productNumber: 'ST-34023R',
      width: '3/4″',
      thickness: 0.023,
      breakStrength: '2,070 Lb.',
      approxLbsPerCoil: '100 Lb.'
    }
  ];

  ngOnInit() {}
}
