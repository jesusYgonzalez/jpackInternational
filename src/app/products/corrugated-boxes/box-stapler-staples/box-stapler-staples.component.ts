import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-stapler-staples',
  templateUrl: './box-stapler-staples.component.html',
  styleUrls: ['./box-stapler-staples.component.scss']
})
export class BoxStaplerStaplesComponent implements OnInit {
  constructor() {}

  boxStapler = [
    {
      productNumber: 'STP-M11458',
      staplerTypeUsage: 'Manual & Regular',
      staplerCrown: '1 1/4″',
      stapleLeg: '5/8″ & 3/4″',
      staplesCapacity: 120
    },
    {
      productNumber: 'STP-M13858',
      staplerTypeUsage: 'Manual & Regular',
      staplerCrown: '1 3/8″',
      stapleLeg: '5/8″ & 3/4″',
      staplesCapacity: 100
    },
    {
      productNumber: 'STP-P11458',
      staplerTypeUsage: 'Auto Pneumatic & Regular',
      staplerCrown: '1 1/4″',
      stapleLeg: '5/8″ & 3/4″',
      staplesCapacity: 120
    },
    {
      productNumber: 'STP-P13858',
      staplerTypeUsage: 'Auto Pneumatic & Regular',
      staplerCrown: '1 3/8″',
      stapleLeg: '5/8″ & 3/4″',
      staplesCapacity: 100
    },
    {
      productNumber: 'STP-IRAIB',
      staplerTypeUsage: 'Auto Pneumatic & Coil Staples',
      staplerCrown: '1 1/4″',
      stapleLeg: '5/8″ & 3/4″',
      staplesCapacity: 1000
    }
  ];
  staples = [
    {
      productNumber: 'STP-114-58',
      description: 'Regular',
      sizeCrownLeg: '1 1/4 x 5/8″',
      numberPerCase: '20,000'
    },
    {
      productNumber: 'STP-114-34',
      description: 'Regular',
      sizeCrownLeg: '1 1/4 x 3/4″',
      numberPerCase: '20,000'
    },
    {
      productNumber: 'STP-138-58',
      description: 'Regular',
      sizeCrownLeg: '1 3/8 x 5/8″',
      numberPerCase: '20,000'
    },
    {
      productNumber: 'STP-138-34',
      description: 'Regular',
      sizeCrownLeg: '1 3/8 x 3/4″',
      numberPerCase: '20,000'
    },
    {
      productNumber: 'STP-RR1-58',
      description: 'Coil Staples',
      sizeCrownLeg: '1 1/4 x 5/8″',
      numberPerCase: '20,000'
    },
    {
      productNumber: 'STP-RR1-34',
      description: 'Coil Staples',
      sizeCrownLeg: '1 1/4 x 3/4″',
      numberPerCase: '20,000'
    }
  ];
  stapleRemover = [
    {
      productNumber: 'STP-230BULK',
      description: 'Removes All Carton Staples'
    }
  ];

  ngOnInit() {}
}
