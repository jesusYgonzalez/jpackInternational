import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stretch-wrap-machinery',
  templateUrl: './stretch-wrap-machinery.component.html',
  styleUrls: ['./stretch-wrap-machinery.component.scss']
})
export class StretchWrapMachineryComponent implements OnInit {
  constructor() {}

  stretchWrapMachinery = [
    {
      productNumber: 'MCH-WP1524',
      description:
        'Make an appointment to experience our machine\'s state-of-the-art functions'
    }
  ];

  ngOnInit() {}
}
