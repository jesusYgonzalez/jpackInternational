import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masking-tape',
  templateUrl: './masking-tape.component.html',
  styleUrls: ['./masking-tape.component.scss']
})
export class MaskingTapeComponent implements OnInit {
  constructor() {}

  maskingTape = [
    {
      productNumber: 'TP-TC0F60MASK-1/2',
      color: 'Neutral',
      size: '1/2″ x 60 Yds.',
      durability: '5.2 Mil.',
      rollsPerCase: 72
    },
    {
      productNumber: 'TP-TC0F60MASK',
      color: 'Neutral',
      size: '3/4″ x 60 Yds.',
      durability: '5.2 Mil.',
      rollsPerCase: 48
    },
    {
      productNumber: 'TP-TC0160MASK',
      color: 'Neutral',
      size: '1″ x 60 Yds.',
      durability: '5.2 Mil.',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-TC01F60MASK',
      color: 'Neutral',
      size: '1 1/2″ x 60 Yds.',
      durability: '5.2 Mil.',
      rollsPerCase: 24
    },
    {
      productNumber: 'TP-TC0260MASK',
      color: 'Neutral',
      size: '2″ x 60 Yds.',
      durability: '5.2 Mil.',
      rollsPerCase: 24
    },
    {
      productNumber: 'TP-TC0360MASK',
      color: 'Neutral',
      size: '3″ x 60 Yds.',
      durability: '5.2 Mil.',
      rollsPerCase: 16
    },
    {
      productNumber: 'TP-TC0F60MASK-B',
      color: 'Blue',
      size: '3/4″ x 60 Yds.',
      durability: '5.2 Mil.',
      rollsPerCase: 48
    },
    {
      productNumber: 'TP-TC0160MASK-B',
      color: 'Blue',
      size: '1″ x 60 Yds.',
      durability: '5.2 Mil.',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-TC01F60MASK-B',
      color: 'Blue',
      size: '1 1/2″ x 60 Yds.',
      durability: '5.2 Mil.',
      rollsPerCase: 24
    },
    {
      productNumber: 'TP-TC0260MASK-B',
      color: 'Blue',
      size: '2″ x 60 Yds.',
      durability: '5.2 Mil.',
      rollsPerCase: 24
    },
    {
      productNumber: 'TP-TC0360MASK-B',
      color: 'Blue',
      size: '3″ x 60 Yds.',
      durability: '5.2 Mil.',
      rollsPerCase: 16
    }
  ];

  ngOnInit() {}
}
