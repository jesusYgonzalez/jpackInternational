import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carton-sealing-tape',
  templateUrl: './carton-sealing-tape.component.html',
  styleUrls: ['./carton-sealing-tape.component.scss']
})
export class CartonSealingTapeComponent implements OnInit {
  constructor() {}

  cartonSealingTape = [
    {
      productNumber: 'TP-MT218C',
      size: '2″ x 110 Yds.',
      durability: '1.8 Mil.',
      color: 'Clear',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-MT218T',
      size: '2″ x 110 Yds.',
      durability: '1.8 Mil.',
      color: 'Tan',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-MT220C',
      size: '2″ x 110 Yds.',
      durability: '2 Mil.',
      color: 'Clear',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-MT220T',
      size: '2″ x 110 Yds.',
      durability: '2 Mil.',
      color: 'Tan',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-MT2020C',
      size: '2″ x 1000 Yds. (Machine)',
      durability: '2 Mil.',
      color: 'Clear',
      rollsPerCase: 4
    },
    {
      productNumber: 'TP-MT318C',
      size: '3″ x 110 Yds.',
      durability: '1.8 Mil.',
      color: 'Clear',
      rollsPerCase: 24
    },
    {
      productNumber: 'TP-MT318T',
      size: '3″ x 110 Yds.',
      durability: '1.8 Mil.',
      color: 'Tan',
      rollsPerCase: 24
    },
    {
      productNumber: 'TP-MT320C',
      size: '3″ x 110 Yds.',
      durability: '2 Mil.',
      color: 'Clear',
      rollsPerCase: 24
    },
    {
      productNumber: 'TP-MT320T',
      size: '3″ x 110 Yds.',
      durability: '2 Mil.',
      color: 'Tan',
      rollsPerCase: 24
    },
    {
      productNumber: 'TP-MT3020C',
      size: '3″ x 1000 Yds. (Machine)',
      durability: '2 Mil.',
      color: 'Clear',
      rollsPerCase: 4
    }
  ];

  ngOnInit() {}
}
