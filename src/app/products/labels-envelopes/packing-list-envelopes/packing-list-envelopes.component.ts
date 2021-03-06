import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packing-list-envelopes',
  templateUrl: './packing-list-envelopes.component.html',
  styleUrls: ['./packing-list-envelopes.component.scss']
})
export class PackingListEnvelopesComponent implements OnInit {
  constructor() {}

  packingListEnvelopes = [
    {
      productNumber: 'QE-12BL',
      description: '4.5″ x 5.5″ Packing List Enclosed',
      numberPerCase: 1000
    },
    {
      productNumber: 'QE-C',
      description: '4.5″ x 5.5″ No Print (Blank)',
      numberPerCase: 1000
    },
    {
      productNumber: 'QE-13BL',
      description: '4.5″ x 5.5″ Invoice Enclosed',
      numberPerCase: 1000
    },
    {
      productNumber: 'QE-ADM-F-6',
      description: '4.5″ x 6.0″ Packing List Enclosed',
      numberPerCase: 1000
    },
    {
      productNumber: 'QE-ADM16',
      description: '5.5″ x 10.0″ Packing List Enclosed',
      numberPerCase: 1000
    },
    {
      productNumber: 'QE-ADM16NP',
      description: '5.5″ x 10.0″ No Print (Blank)',
      numberPerCase: 1000
    },
    {
      productNumber: 'QE-ADM16IE',
      description: '5.5″ x 10.0″ Invoice Enclosed',
      numberPerCase: 1000
    },
    {
      productNumber: 'QE-ADM19',
      description: '7.5″ X 5.5″ Packing List Enclosed',
      numberPerCase: 1000
    },
    {
      productNumber: 'QE-ADM19NP',
      description: '7.5″ X 5.5″ No Print (Blank)',
      numberPerCase: 1000
    },
    {
      productNumber: 'QE-ADM19IE',
      description: '7.5″ X 5.5″ Invoice Enclosed',
      numberPerCase: 1000
    },
    {
      productNumber: 'QE-ADM912NP',
      description: '9.5″ x 12.0″ No Print (Blank)',
      numberPerCase: 500
    }
  ];

  ngOnInit() {}
}
