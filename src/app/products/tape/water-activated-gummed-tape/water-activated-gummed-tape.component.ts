import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-activated-gummed-tape',
  templateUrl: './water-activated-gummed-tape.component.html',
  styleUrls: ['./water-activated-gummed-tape.component.scss']
})
export class WaterActivatedGummedTapeComponent implements OnInit {
  constructor() {}

  waterActivatedGummedTape = [
    {
      productNumber: 'TP-AL2450K',
      size: '2″ x 450′',
      description: 'Kraft',
      rollsPerCase: 14
    },
    {
      productNumber: 'TP-AL2F450K',
      size: '2 1/2″ x 450′',
      description: 'Kraft',
      rollsPerCase: 12
    },
    {
      productNumber: 'TP-AL3375K',
      size: '3″ x 375′',
      description: 'Kraft',
      rollsPerCase: 8
    },
    {
      productNumber: 'TP-AL3375W',
      size: '3″ x 375′',
      description: 'White',
      rollsPerCase: 8
    },
    {
      productNumber: 'TP-AL3450K',
      size: '3″ x 450′',
      description: 'Kraft',
      rollsPerCase: 10
    },
    {
      productNumber: 'TP-AL3450W',
      size: '3″ x 450′',
      description: 'White',
      rollsPerCase: 10
    },
    {
      productNumber: 'TP-AL3450FHW',
      size: '3″ x 450′',
      description: 'FRAGILE HANDLE WITH CARE (Red Ink)',
      rollsPerCase: 10
    },
    {
      productNumber: 'TP-AL3450WPP',
      size: '3″  x 450′',
      description: 'WARNING PILFER PROOF (Red Ink)',
      rollsPerCase: 10
    }
  ];

  ngOnInit() {}
}
