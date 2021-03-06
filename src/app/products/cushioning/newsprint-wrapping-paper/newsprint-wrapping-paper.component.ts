import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsprint-wrapping-paper',
  templateUrl: './newsprint-wrapping-paper.component.html',
  styleUrls: ['./newsprint-wrapping-paper.component.scss']
})
export class NewsprintWrappingPaperComponent implements OnInit {
  constructor() {}

  newsprintWrappingPaper = [
    {
      productNumber: 'MA-NSP1520',
      size: '15 x 20"',
      weightPerBundle: '50 lb.'
    },
    {
      productNumber: 'MA-NSP1824',
      size: '18 x 24"',
      weightPerBundle: '50 lb.'
    },
    {
      productNumber: 'MA-NSP2436',
      size: '24 x 36"',
      weightPerBundle: '50 lb.'
    }
  ];

  ngOnInit() {}
}
