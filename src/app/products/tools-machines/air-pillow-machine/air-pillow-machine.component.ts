import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-pillow-machine',
  templateUrl: './air-pillow-machine.component.html',
  styleUrls: ['./air-pillow-machine.component.scss']
})
export class AirPillowMachineComponent implements OnInit {
  constructor() {}

  miniAirSystem = [
    {
      productNumber: 'MINIAIR',
      description: 'Produces All mini Air Pillows',
      weight: '5 KG',
      speed: '8M / Minute'
    }
  ];

  miniAirPillows = [
    {
      productNumber: 'AF-0810',
      description: 'Filler Cushion (1 Cell Wide)',
      cellSize: '200 x 250mm',
      rollSize: '200mm x 700M',
      rollsPerCase: '2 Rolls'
    },
    {
      productNumber: 'AF-0808',
      description: 'Filler Cushion (1 Cell Wide)',
      cellSize: '200 x 200mm',
      rollSize: '200mm x 700M',
      rollsPerCase: '2 Rolls'
    },
    {
      productNumber: 'AF-0806',
      description: 'Filler Cushion (1 Cell Wide)',
      cellSize: '200 x 150mm',
      rollSize: '200mm x 700M',
      rollsPerCase: '2 Rolls'
    },
    {
      productNumber: 'AF-0804',
      description: 'Filler Cushion (1 Cell Wide)',
      cellSize: '200 x 100mm',
      rollSize: '200mm x 700M',
      rollsPerCase: '2 Rolls'
    },
    {
      productNumber: 'AW-TUBEL',
      description: 'Large Air Wrapper Tube (2 Cells Wide)',
      cellSize: '170 x 150mm',
      rollSize: '400mm x 500M',
      rollsPerCase: '1 Roll'
    },
    {
      productNumber: 'AW-TUBES',
      description: 'Small Air Wrapper Tube (2 Cells Wide)',
      cellSize: '170 x 76mm',
      rollSize: '400mm x 500M',
      rollsPerCase: '1 Roll'
    },
    {
      productNumber: 'AW-TUBEM',
      description: 'Multi Air Wrapper Tube (4 Cells Wide)',
      cellSize: '85 x 60mm',
      rollSize: '400mm x 500M',
      rollsPerCase: '1 Roll'
    },
    {
      productNumber: 'AW-BUBBLE',
      description: 'Bubble (8 Cells Wide)',
      cellSize: '43 x 43mm',
      rollSize: '400mm x 500M',
      rollsPerCase: '1 Roll'
    }
  ];

  ngOnInit() {}
}
