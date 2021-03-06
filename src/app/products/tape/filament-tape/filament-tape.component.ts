import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filament-tape',
  templateUrl: './filament-tape.component.html',
  styleUrls: ['./filament-tape.component.scss']
})
export class FilamentTapeComponent implements OnInit {
  constructor() {}

  filamentTape = [
    {
      productNumber: 'TP-FMF60',
      durability: '4 Mil. 100 Lbs. Tensile Strength',
      size: '1/2″ x 60 Yds.',
      rollsPerCase: 72
    },
    {
      productNumber: 'TP-FMF60-34',
      durability: '4 Mil. 100 Lbs. Tensile Strength',
      size: '3/4″ x 60 Yds.',
      rollsPerCase: 48
    },
    {
      productNumber: 'TP-FM0160',
      durability: '4 Mil. 100 Lbs. Tensile Strength',
      size: '1″ x 60 Yds.',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-FM01F60',
      durability: '4 Mil. 100 Lbs. Tensile Strength',
      size: '1 1/2″ x 60 Yds.',
      rollsPerCase: 24
    },
    {
      productNumber: 'TP-FM0260',
      durability: '4 Mil. 100 Lbs. Tensile Strength',
      size: '2″ x 60 Yds.',
      rollsPerCase: 24
    },
    {
      productNumber: 'TP-FMF60HD',
      durability: '4.4 Mil. 156 Lbs. Tensile Strength',
      size: '1/2″ x 60 Yds.',
      rollsPerCase: 72
    },
    {
      productNumber: 'TP-FMF60HD-34',
      durability: '4.4 Mil. 156 Lbs. Tensile Strength',
      size: '3/4″ x 60 Yds.',
      rollsPerCase: 48
    },
    {
      productNumber: 'TP-FM0160HD',
      durability: '4.4 Mil. 156 Lbs. Tensile Strength',
      size: '1″ x 60 Yds.',
      rollsPerCase: 36
    },
    {
      productNumber: 'TP-FM0260HD',
      durability: '4.4 Mil. 156 Lbs. Tensile Strength',
      size: '2″ x 60 Yds.',
      rollsPerCase: 24
    }
  ];

  ngOnInit() {}
}
