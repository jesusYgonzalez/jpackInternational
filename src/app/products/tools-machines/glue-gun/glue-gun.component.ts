import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glue-gun',
  templateUrl: './glue-gun.component.html',
  styleUrls: ['./glue-gun.component.scss']
})
export class GlueGunComponent implements OnInit {
  constructor() {}

  glueGun = [
    {
      productNumber: 'GLU-GUN-HC5',
      description: '40 Watts Glue Guns'
    },
    {
      productNumber: 'GLU-GUN',
      description: '80 Watts Glue Guns'
    },
    {
      productNumber: 'GLU-PRO',
      description: '250 Watts Glue Guns'
    }
  ];

  glueStick = [
    {
      productNumber: 'GLU-1210C',
      description: '1/2″ x 10″ Clear',
      weight: '25LBS'
    },
    {
      productNumber: 'GLU-1210T',
      description: '1/2″ x 10″ Tan',
      weight: '25LBS'
    }
  ];

  ngOnInit() {}
}
