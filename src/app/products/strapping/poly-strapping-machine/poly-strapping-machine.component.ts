import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poly-strapping-machine',
  templateUrl: './poly-strapping-machine.component.html',
  styleUrls: ['./poly-strapping-machine.component.scss']
})
export class PolyStrappingMachineComponent implements OnInit {
  constructor() {}

  polyStrappingMachine = [
    {
      power: 'Strap Width',
      voltage: '9, 12, 15 mm (adjustable) (6mm option)'
    },
    {
      power: 'Strapping Tension',
      voltage: '15 ~ 50 kgs'
    },
    {
      power: 'Strapping Speed',
      voltage: '2.0 sec./strap'
    },
    {
      power: 'Strapping Size',
      voltage: 'Min. : 60 mm, Max. : Any size'
    },
    {
      power: 'Table Height',
      voltage: '750 mm'
    },
    {
      power: 'Machine Size',
      voltage: 'L910 x W580 x H750 mm'
    }
  ];

  ngOnInit() {}
}
