import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cable-ties',
  templateUrl: './cable-ties.component.html',
  styleUrls: ['./cable-ties.component.scss']
})
export class CableTiesComponent implements OnInit {
  constructor() {}

  cableTies = [
    {
      productNumber: 'CT-4-18',
      length: '4″',
      tensileStrength: '0.1″ & 18 Lb.',
      numberPerPack: '1,000'
    },
    {
      productNumber: 'CT-6-18',
      length: '6″',
      tensileStrength: '0.1″ & 18 Lb.',
      numberPerPack: '1,000'
    },
    {
      productNumber: 'CT-8-40',
      length: '8″',
      tensileStrength: '0.14″ & 40 Lb.',
      numberPerPack: '1,000'
    },
    {
      productNumber: 'CT-10-40',
      length: '10″',
      tensileStrength: '0.14″ & 40 Lb.',
      numberPerPack: '1,000'
    },
    {
      productNumber: 'CT-12-40',
      length: '12″',
      tensileStrength: '0.14″ & 40 Lb.',
      numberPerPack: '1,000'
    },
    {
      productNumber: 'CT-12-120',
      length: '12″',
      tensileStrength: '0.30″ & 120 Lb.',
      numberPerPack: '1,000'
    },
    {
      productNumber: 'CT-15-120',
      length: '15″',
      tensileStrength: '0.30″ & 120 Lb.',
      numberPerPack: '500'
    },
    {
      productNumber: 'CT-18-120',
      length: '18″',
      tensileStrength: '0.30″ & 120 Lb.',
      numberPerPack: '500'
    },
    {
      productNumber: 'CT-24-175',
      length: '24″',
      tensileStrength: '0.35″ & 175 Lb.',
      numberPerPack: '100'
    },
    {
      productNumber: 'CT-36-175',
      length: '36″',
      tensileStrength: '0.35″ & 175 Lb.',
      numberPerPack: '100'
    }
  ];

  ngOnInit() {}
}
