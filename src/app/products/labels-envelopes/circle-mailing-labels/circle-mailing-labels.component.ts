import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-mailing-labels',
  templateUrl: './circle-mailing-labels.component.html',
  styleUrls: ['./circle-mailing-labels.component.scss']
})
export class CircleMailingLabelsComponent implements OnInit {
  constructor() {}

  circleMailingLabels = [
    {
      productNumber: 'LB-CIR-C075',
      circleDiameter: '3/4″',
      labelsPerRoll: 5000
    },
    {
      productNumber: 'LB-CIR-C100',
      circleDiameter: '1″',
      labelsPerRoll: 5000
    },
    {
      productNumber: 'LB-CIR-C150',
      circleDiameter: '1 1/2″',
      labelsPerRoll: 1000
    },
    {
      productNumber: 'LB-CIR-C200',
      circleDiameter: '2″',
      labelsPerRoll: 1000
    },
    {
      productNumber: 'LB-CIR-C250',
      circleDiameter: '2 1/2″',
      labelsPerRoll: 1000
    },
    {
      productNumber: 'LB-CIR-C300',
      circleDiameter: '3″',
      labelsPerRoll: 1000
    },
    {
      productNumber: 'LB-CIR-C400',
      circleDiameter: '4″',
      labelsPerRoll: 500
    }
  ];

  ngOnInit() {}
}
