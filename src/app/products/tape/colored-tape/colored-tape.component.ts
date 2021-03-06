import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colored-tape',
  templateUrl: './colored-tape.component.html',
  styleUrls: ['./colored-tape.component.scss']
})
export class ColoredTapeComponent implements OnInit {
  constructor() {}

  coloredTape = [
    {
      productNumber: 'TP-TC2110B',
      color: 'Blue',
      durability: '2 Mil.',
      size: '2″ x 110 Yds.',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-TC2110BK',
      color: 'Black',
      durability: '2 Mil.',
      size: '2″ x 110 Yds.',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-TC2110G',
      color: 'Green',
      durability: '2 Mil.',
      size: '2″ x 110 Yds.',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-TC2110O',
      color: 'Orange',
      durability: '2 Mil.',
      size: '2″ x 110 Yds.',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-TC2110W',
      color: 'White',
      durability: '2 Mil.',
      size: '2″ x 110 Yds.',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-TC2110Y',
      color: 'Yellow',
      durability: '2 Mil.',
      size: '2″ x 110 Yds.',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-TC2110R',
      color: 'Red',
      durability: '2 Mil.',
      size: '2″ x 110 Yds.',
      rollsPerCase: 36
    }
  ];

  ngOnInit() {}
}
