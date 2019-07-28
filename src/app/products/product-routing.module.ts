import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';
import { AntiStaticBagsComponent } from './bags/anti-static-bags/anti-static-bags.component';
import { BubblePouchesComponent } from './bags/bubble-pouches/bubble-pouches.component';
import { ClearPolyBagsComponent } from './bags/clear-poly-bags/clear-poly-bags.component';
import { PolyBagSealerComponent } from './bags/poly-bag-sealer/poly-bag-sealer.component';
import { PolypropyleneBagsComponent } from './bags/polypropylene-bags/polypropylene-bags.component';
import { PolyTubingComponent } from './bags/poly-tubing/poly-tubing.component';
import { ClearReclosableBagsComponent } from './bags/clear-reclosable-bags/clear-reclosable-bags.component';
import { StaticShieldingBagsComponent } from './bags/static-shielding-bags/static-shielding-bags.component';
import { VacuumBagsComponent } from './bags/vacuum-bags/vacuum-bags.component';

const productRoutes: Routes = [
  { path: 'anti-static-bags', component: AntiStaticBagsComponent },
  { path: 'bubble-pouches-bags', component: BubblePouchesComponent },
  { path: 'clear-poly-bags', component: ClearPolyBagsComponent },
  { path: 'poly-bag-sealer', component: PolyBagSealerComponent },
  { path: 'polypropylene-bags', component: PolypropyleneBagsComponent },
  { path: 'poly-tubing', component: PolyTubingComponent },
  { path: 'clear-reclosable-bags', component: ClearReclosableBagsComponent },
  { path: 'static-shielding-bags', component: StaticShieldingBagsComponent },
  { path: 'vacuum-bags', component: VacuumBagsComponent },

  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
