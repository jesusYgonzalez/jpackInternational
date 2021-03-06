import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poly-strapping',
  templateUrl: './poly-strapping.component.html',
  styleUrls: ['./poly-strapping.component.scss']
})
export class PolyStrappingComponent implements OnInit {
  constructor() {}

  polyStrapping = [
    {
      productNumber: 'SP-PCF3090',
      width: '1/2″',
      thickness: 0.017,
      breakStrength: '350 Lb.',
      length: '9,000′',
      coreDiameterHeight: '8″ x 8″',
      color: 'Black'
    },
    {
      productNumber: 'SP-MP1270W',
      width: '1/2″',
      thickness: 0.027,
      breakStrength: '600 Lb.',
      length: '7,200′',
      coreDiameterHeight: '8″ x 8″',
      color: 'White'
    },
    {
      productNumber: 'SP-MP1270Y',
      width: '1/2″',
      thickness: 0.027,
      breakStrength: '600 Lb.',
      length: '7,200′',
      coreDiameterHeight: '8″ x 8″',
      color: 'Yellow'
    },
    {
      productNumber: 'SP-MP1570Y',
      width: '5/8″',
      thickness: 0.027,
      breakStrength: '600 Lb.',
      length: '6,000′',
      coreDiameterHeight: '16″ x 6″',
      color: 'Yellow'
    }
  ];

  ngOnInit() {}
}
