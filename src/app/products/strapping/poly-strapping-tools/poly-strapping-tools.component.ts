import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poly-strapping-tools',
  templateUrl: './poly-strapping-tools.component.html',
  styleUrls: ['./poly-strapping-tools.component.scss']
})
export class PolyStrappingToolsComponent implements OnInit {
  constructor() {}

  strappingCart = [
    {
      productNumber: 'DIS-DS100',
      description: 'For Poly Strapping',
      core: '8 x 8″; 16″ X 6″; 16″ X 3″'
    },
    {
      productNumber: 'DIS-SD15',
      description: 'For Steel Strapping',
      core: '16″ X 6″; 16″ X 3″'
    }
  ];

  tensioner = [
    {
      productNumber: 'DIS-TC110',
      description: 'For 1/2″, 5/8″, & 3/4″ Poly Strapping'
    },
    {
      productNumber: 'DIS-TCS290',
      description: 'For 1/2″, 5/8″, & 3/4″” Steel Strapping'
    }
  ];

  sealers = [
    {
      productNumber: 'DIS-TCP302',
      description: '1/2″, 5/8″, & 3/4″ Polypropylene Sealer'
    },
    {
      productNumber: 'DIS-TCS802',
      description: '1/2″, 5/8″, & 3/4″ Steel Sealer'
    }
  ];

  metalSeals = [
    {
      productNumber: 'OM-PC12LD',
      description: '1/2″ Metal Seals',
      numberPerCarton: 1000
    },
    {
      productNumber: 'OM-58LD',
      description: '5/8″ Metal Seals',
      numberPerCarton: 1000
    },
    {
      productNumber: 'OM-OMS34',
      description: '3/4″ Metal Seals',
      numberPerCarton: 1000
    }
  ];

  steelBuckles = [
    {
      productNumber: 'BUCKLES-12',
      description: '1/2″ Steel Buckles',
      numberPerCarton: 1000
    },
    {
      productNumber: 'BUCKLES-58',
      description: '5/8″ Steel Buckles',
      numberPerCarton: 1000
    }
  ];

  ngOnInit() {}
}
