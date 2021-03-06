import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-tape-dispenser',
  templateUrl: './office-tape-dispenser.component.html',
  styleUrls: ['./office-tape-dispenser.component.scss']
})
export class OfficeTapeDispenserComponent implements OnInit {
  constructor() {}

  stationaryTape = [
    {
      productNumber: 'TP-OFFICE-1/2',
      size: '1/2″ x 72 Yds.',
      core: '3″',
      rollsPerCase: 144
    },
    {
      productNumber: 'TP-OFFICE-3/4',
      size: '3/4″ x 72 Yds.',
      core: '3″',
      rollsPerCase: 96
    },
    {
      productNumber: 'TP-OFFICE-1',
      size: '1″ x 72 Yds.',
      core: '3″',
      rollsPerCase: 72
    }
  ];

  stationaryTapeDispenser = [
    {
      productNumber: 'DIS-SL7316',
      description:
        'Place Up to 2 Different Tapes (Together Within the Width Limit)',
      width: '1″'
    },
    {
      productNumber: 'DIS-SL7326',
      description:
        'Place Up to 3 Different Tapes (Together Within the Width Limit)',
      width: '2″'
    },
    {
      productNumber: 'DIS-SL7336',
      description:
        'Place Up to 3 Different Tapes (Together Within the Width Limit)',
      width: '3″'
    }
  ];

  ngOnInit() {}
}
