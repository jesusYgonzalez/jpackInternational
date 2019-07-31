import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-wrap-foam-dispenser',
  templateUrl: './bubble-wrap-foam-dispenser.component.html',
  styleUrls: ['./bubble-wrap-foam-dispenser.component.scss']
})
export class BubbleWrapFoamDispenserComponent implements OnInit {
  constructor() {}

  bubbleWrapFoamDis = [
    {
      productNumber: 'DIS-BUBBLE12',
      armWidth: '12"',
      description: 'Wall Mount & Two Arms'
    },
    {
      productNumber: 'DIS-BUBBLE24',
      armWidth: '24"',
      description: 'Wall Mount & Two Arms'
    }
  ];

  ngOnInit() {}
}
