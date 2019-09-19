import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapping-paper-dispenser',
  templateUrl: './wrapping-paper-dispenser.component.html',
  styleUrls: ['./wrapping-paper-dispenser.component.scss']
})
export class WrappingPaperDispenserComponent implements OnInit {
  constructor() {}

  wrappingPaperDispenser = [
    {
      productNumber: 'DIS-WRAP-18',
      armWidth: '18″',
      description: 'Horizontal Wrapping Paper Dispenser & Cutter'
    },
    {
      productNumber: 'DIS-WRAP-24',
      armWidth: '24″',
      description: 'Horizontal Wrapping Paper Dispenser & Cutter'
    },
    {
      productNumber: 'DIS-WRAP-36',
      armWidth: '36″',
      description: 'Horizontal Wrapping Paper Dispenser & Cutter'
    }
  ];

  ngOnInit() {}
}
