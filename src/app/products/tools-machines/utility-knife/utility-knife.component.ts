import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-knife',
  templateUrl: './utility-knife.component.html',
  styleUrls: ['./utility-knife.component.scss']
})
export class UtilityKnifeComponent implements OnInit {

  constructor() { }

  utilityKnife = [
    {
      productNumber: 'KN-SL501',
      description: 'Heavy Duty Utility Knives *2 Extra Blades Included*',
      color: 'Orange'
    },
    {
      productNumber: 'KN-SL502',
      description: 'Economic Utility Knives',
      color: 'Orange'
    },
    {
      productNumber: 'KN-SL503',
      description: '“Slimline” Utility Knives *2 Extra Blades Included*',
      color: 'White'
    },
    {
      productNumber: 'KN-SL504',
      description: 'Carton Cutter (12 Knives/Case)',
      color: 'Steel'
    },
    {
      productNumber: 'KN-SL505',
      description: 'Heavy Duty Utility Knives Color Silver *4 Extra Blades Included*',
      color: 'Silver'
    }
  ];

  utilityBlades = [
    {
      productNumber: 'KN-SL3K',
      description: 'SL-503 Utility Knife Replacement Blade',
      numberPerCase: 100
    },
    {
      productNumber: 'KN-SL4K',
      description: 'SL-505 Utility Knife Replacement Blade',
      numberPerCase: 100
    },
    {
      productNumber: 'KN-SL5K',
      description: 'SL501, SL502 Snap-Off Replacement Blade',
      numberPerCase: 10
    },
    {
      productNumber: 'KN-SL6K',
      description: 'SL-504 Utility Knife Replacement Blade',
      numberPerCase: 100
    }
  ];

  ngOnInit() {
  }

}
