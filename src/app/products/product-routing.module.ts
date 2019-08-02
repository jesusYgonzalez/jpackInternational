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
import { BoxStaplerStaplesComponent } from './corrugated-boxes/box-stapler-staples/box-stapler-staples.component';
import { CorrugatedBoxesComponent } from './corrugated-boxes/corrugated-boxes/corrugated-boxes.component';
import { CorrugatedBulkContainersComponent } from './corrugated-boxes/corrugated-bulk-containers/corrugated-bulk-containers.component';
import { CorrugatedMailersComponent } from './corrugated-boxes/corrugated-mailers/corrugated-mailers.component';
import { CorrugatedPadsComponent } from './corrugated-boxes/corrugated-pads/corrugated-pads.component';
import { EasyFoldBoxesComponent } from './corrugated-boxes/easy-fold-boxes/easy-fold-boxes.component';
import { MailingTubesComponent } from './corrugated-boxes/mailing-tubes/mailing-tubes.component';
import { BubbleWrapComponent } from './cushioning/bubble-wrap/bubble-wrap.component';
import { BubbleWrapFoamDispenserComponent } from './cushioning/bubble-wrap-foam-dispenser/bubble-wrap-foam-dispenser.component';
import { CushioningFoamComponent } from './cushioning/cushioning-foam/cushioning-foam.component';
import { KraftWrappingPaperComponent } from './cushioning/kraft-wrapping-paper/kraft-wrapping-paper.component';
import { PackingPeanutsComponent } from './cushioning/packing-peanuts/packing-peanuts.component';
import { TissueWrappingPaperComponent } from './cushioning/tissue-wrapping-paper/tissue-wrapping-paper.component';
import { NewsprintWrappingPaperComponent } from './cushioning/newsprint-wrapping-paper/newsprint-wrapping-paper.component';
import { CircleMailingLabelsComponent } from './labels-envelopes/circle-mailing-labels/circle-mailing-labels.component';
import { LaserLabelsComponent } from './labels-envelopes/laser-labels/laser-labels.component';
import { PackingListEnvelopesComponent } from './labels-envelopes/packing-list-envelopes/packing-list-envelopes.component';
import { ShippingHandlingLabelsComponent } from './labels-envelopes/shipping-handling-labels/shipping-handling-labels.component';
import { ThermalTransferComponent } from './labels-envelopes/thermal-transfer/thermal-transfer.component';

const productRoutes: Routes = [
  // BAGS //
  { path: 'anti-static-bags', component: AntiStaticBagsComponent },
  { path: 'bubble-pouches-bags', component: BubblePouchesComponent },
  { path: 'clear-poly-bags', component: ClearPolyBagsComponent },
  { path: 'poly-bag-sealer', component: PolyBagSealerComponent },
  { path: 'polypropylene-bags', component: PolypropyleneBagsComponent },
  { path: 'poly-tubing', component: PolyTubingComponent },
  { path: 'clear-reclosable-bags', component: ClearReclosableBagsComponent },
  { path: 'static-shielding-bags', component: StaticShieldingBagsComponent },
  { path: 'vacuum-bags', component: VacuumBagsComponent },
  // BOXES //
  { path: 'box-stapler-staples', component: BoxStaplerStaplesComponent },
  { path: 'corrugated-boxes', component: CorrugatedBoxesComponent },
  { path: 'corrugated-bulk-containers', component: CorrugatedBulkContainersComponent },
  { path: 'corrugated-mailers', component: CorrugatedMailersComponent },
  { path: 'corrugated-pads', component: CorrugatedPadsComponent },
  { path: 'easy-fold-boxes', component: EasyFoldBoxesComponent },
  { path: 'mailing-tubes', component: MailingTubesComponent },
  // CUSHIONING //
  { path: 'bubble-wrap', component: BubbleWrapComponent },
  { path: 'bubble-wrap-foam-dispenser', component: BubbleWrapFoamDispenserComponent },
  { path: 'cushioning-foam', component: CushioningFoamComponent },
  { path: 'kraft-wrapping-paper', component: KraftWrappingPaperComponent },
  { path: 'newsprint-wrapping-paper', component: NewsprintWrappingPaperComponent },
  { path: 'packing-peanuts', component: PackingPeanutsComponent },
  { path: 'tissue-wrapping-paper', component: TissueWrappingPaperComponent },
  // LABELS AND ENVELOPES //
  { path: 'circle-mailing-labels', component: CircleMailingLabelsComponent },
  { path: 'laser-labels', component: LaserLabelsComponent },
  { path: 'packing-list-envelopes', component: PackingListEnvelopesComponent },
  { path: 'shipping-handling-labels', component: ShippingHandlingLabelsComponent },
  { path: 'thermal-transfer', component: ThermalTransferComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(productRoutes),
    // RouterModule.forRoot(productRoutes, {
    //   scrollPositionRestoration: 'enabled'
    // }),
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
