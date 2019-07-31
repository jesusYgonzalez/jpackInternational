import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packing-peanuts',
  templateUrl: './packing-peanuts.component.html',
  styleUrls: ['./packing-peanuts.component.scss']
})
export class PackingPeanutsComponent implements OnInit {
  constructor() {}

  packingPeanuts = [
    {
      productNumber: 'PEANUT',
      description: 'S-Shaped PELASPAN PAC',
      color: 'White',
      size: '14 Cu. Ft.'
    },
    {
      productNumber: 'PEANUT-BIO',
      description: 'Biodegradable S- Shaped PELASPAN PAC',
      color: 'Beige',
      size: '14 Cu. Ft.'
    },
    {
      productNumber: 'PEANUT-PINK',
      description: 'Anti-Static S-Shaped PELASPAN PAC',
      color: 'Pink',
      size: '14 Cu. Ft.'
    }
  ];

  ngOnInit() {}
}
