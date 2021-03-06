import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-handling-labels',
  templateUrl: './shipping-handling-labels.component.html',
  styleUrls: ['./shipping-handling-labels.component.scss']
})
export class ShippingHandlingLabelsComponent implements OnInit {
  constructor() {}

  shippingHandlingLabels = [
    {
      productNumber: 'AL-SAL204',
      size: '2″ X 2″',
      description: 'ANTI-STATIC CAUTION',
      labelsPerRoll: 500
    },
    {
      productNumber: 'LB-WAR',
      size: '3″ X 5″',
      description: 'FRAGILE THIS SIDE UP ARROW',
      labelsPerRoll: 500
    },
    {
      productNumber: 'LB-WAR-261',
      size: '2″ X 3″',
      description: 'FRAGILE HANDLE WITH CARE',
      labelsPerRoll: 500
    },
    {
      productNumber: 'LB-WAR-401',
      size: '3″ X 5″',
      description: 'FRAGILE HANDLE WITH CARE',
      labelsPerRoll: 500
    },
    {
      productNumber: 'LB-WAR-402',
      size: '3″ X 5″',
      description: 'GLASS HANDLE WITH CARE',
      labelsPerRoll: 500
    },
    {
      productNumber: 'LB-WAR-SKID',
      size: '3″ X 5″',
      description: 'DO NOT BREAK DOWN SKID',
      labelsPerRoll: 500
    },
    {
      productNumber: 'LB-WAR-STACK',
      size: '3″ X 5″',
      description: 'DO NOT STACK',
      labelsPerRoll: 500
    },
    {
      productNumber: 'LB-AMS-813',
      size: '4″ X 6″',
      description: 'FRAGILE W/ INSTRUCTION',
      labelsPerRoll: 500
    }
  ];

  ngOnInit() {}
}
