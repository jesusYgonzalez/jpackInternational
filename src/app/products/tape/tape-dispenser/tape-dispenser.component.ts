import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tape-dispenser',
  templateUrl: './tape-dispenser.component.html',
  styleUrls: ['./tape-dispenser.component.scss']
})
export class TapeDispenserComponent implements OnInit {
  constructor() {}

  tapeDispenser = [
    {
      productNumber: 'DIS-SL213',
      width: '2″',
      description: 'Standard Gun'
    },
    {
      productNumber: 'DIS-SL209',
      width: '2″',
      description: 'Deluxe Gun'
    },
    {
      productNumber: 'DIS-SL239',
      width: '2″',
      description: 'Heavy Duty “Work Horse”'
    },
    {
      productNumber: 'DIS-SL2398',
      width: '2″',
      description: 'Seal-Safe Retractable Blade'
    },
    {
      productNumber: 'DIS-SL215',
      width: '2″',
      description: 'Mouse Trap – Spring Loaded'
    },
    {
      productNumber: 'DIS-SL303',
      width: '3″',
      description: 'Standard Gun'
    },
    {
      productNumber: 'DIS-SL326',
      width: '3″',
      description: 'Deluxe Gun'
    },
    {
      productNumber: 'DIS-SL339',
      width: '3″',
      description: 'Heavy Duty “Work Horse”'
    },
    {
      productNumber: 'DIS-SL3398',
      width: '3″',
      description: 'Seal-Safe Retractable Blade'
    }
  ];

  ngOnInit() {}
}
