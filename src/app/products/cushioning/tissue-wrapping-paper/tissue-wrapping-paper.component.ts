import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tissue-wrapping-paper',
  templateUrl: './tissue-wrapping-paper.component.html',
  styleUrls: ['./tissue-wrapping-paper.component.scss']
})
export class TissueWrappingPaperComponent implements OnInit {
  constructor() {}

  tissueWrappingPaper = [
    {
      productNumber: 'MA-1214-TISSUE',
      size: '12 X 14″',
      numberPerCase: 9600
    },
    {
      productNumber: 'MA-1520-TISSUE',
      size: '15 X 20″',
      numberPerCase: 9600
    },
    {
      productNumber: 'MA-2030-TISSUE',
      size: '20 X 30″',
      numberPerCase: 4800
    },
    {
      productNumber: 'MA-2436-TISSUE',
      size: '24 X 36″',
      numberPerCase: 5000
    }
  ];

  ngOnInit() {}
}
