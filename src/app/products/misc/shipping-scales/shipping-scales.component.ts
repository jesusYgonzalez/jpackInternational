import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-scales',
  templateUrl: './shipping-scales.component.html',
  styleUrls: ['./shipping-scales.component.scss']
})
export class ShippingScalesComponent implements OnInit {
  constructor() {}

  shippingScale = [
    {
      productNumber: 'SCALE-W4820',
      capacity: '68KG/150LB.',
      sensitivity: '0.05KG/0.1 LB.',
      platformSize: '11.8″ x 11.25″'
    },
    {
      productNumber: 'SCALE-W4830',
      capacity: '150KG/330LB.',
      sensitivity: '0.05KG/0.1 LB.',
      platformSize: '11.8″ x 11.25″'
    },
    {
      productNumber: 'SCALE-WUB840',
      capacity: '200KG/440LB.',
      sensitivity: '0.05KG/0.1 LB.',
      platformSize: '11.8″ x 11.25″'
    },
    {
      productNumber: 'SCALE-SL5000',
      capacity: '5000 LB.',
      sensitivity: '2 LB.',
      platformSize: 'PALLET'
    },
    {
      productNumber: 'SCALE-SL10000',
      capacity: '10000 LB.',
      sensitivity: '2 LB.',
      platformSize: 'PALLET'
    }
  ];

  ngOnInit() {}
}
