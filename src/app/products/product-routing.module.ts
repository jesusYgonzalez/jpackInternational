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
import { KraftBubbleComponent } from './mailers/kraft-bubble/kraft-bubble.component';
import { PolyBubbleMailerComponent } from './mailers/poly-bubble-mailer/poly-bubble-mailer.component';
import { PolyMailerComponent } from './mailers/poly-mailer/poly-mailer.component';
import { PolyStrappingComponent } from './strapping/poly-strapping/poly-strapping.component';
import { PolyStrappingMachineComponent } from './strapping/poly-strapping-machine/poly-strapping-machine.component';
import { PolyStrappingToolsComponent } from './strapping/poly-strapping-tools/poly-strapping-tools.component';
import { SteelStrappingComponent } from './strapping/steel-strapping/steel-strapping.component';
import { HandStretchWrapComponent } from './stretch-film/hand-stretch-wrap/hand-stretch-wrap.component';
import { MachineStretchWrapComponent } from './stretch-film/machine-stretch-wrap/machine-stretch-wrap.component';
import { OpaqueStretchWrapComponent } from './stretch-film/opaque-stretch-wrap/opaque-stretch-wrap.component';
import { ShrinkWrapSystemComponent } from './stretch-film/shrink-wrap-system/shrink-wrap-system.component';
import { ShrinkWrapRollComponent } from './stretch-film/shrink-wrap-roll/shrink-wrap-roll.component';
import { StretchWrapMachineryComponent } from './stretch-film/stretch-wrap-machinery/stretch-wrap-machinery.component';
import { CartonSealingTapeComponent } from './tape/carton-sealing-tape/carton-sealing-tape.component';
import { ColoredTapeComponent } from './tape/colored-tape/colored-tape.component';
import { CustomPrintTapeComponent } from './tape/custom-print-tape/custom-print-tape.component';
import { FilamentTapeComponent } from './tape/filament-tape/filament-tape.component';
import { MaskingTapeComponent } from './tape/masking-tape/masking-tape.component';
import { OfficeTapeDispenserComponent } from './tape/office-tape-dispenser/office-tape-dispenser.component';
import { TapeDispenserComponent } from './tape/tape-dispenser/tape-dispenser.component';
import { VinylTapeComponent } from './tape/vinyl-tape/vinyl-tape.component';
import { WaterActivatedGummedTapeComponent } from './tape/water-activated-gummed-tape/water-activated-gummed-tape.component';
import { AirPillowMachineComponent } from './tools-machines/air-pillow-machine/air-pillow-machine.component';
import { GlueGunComponent } from './tools-machines/glue-gun/glue-gun.component';
import { WrappingPaperDispenserComponent } from './tools-machines/wrapping-paper-dispenser/wrapping-paper-dispenser.component';
import { UtilityKnifeComponent } from './tools-machines/utility-knife/utility-knife.component';
import { PolyTubingDispenserComponent } from './tools-machines/poly-tubing-dispenser/poly-tubing-dispenser.component';
import { VBoardsComponent } from './strapping/v-boards/v-boards.component';
import { CableTiesComponent } from './misc/cable-ties/cable-ties.component';
import { GlovesMasksComponent } from './misc/gloves-masks/gloves-masks.component';
import { MetalTruckSealComponent } from './misc/metal-truck-seal/metal-truck-seal.component';
import { ShippingScalesComponent } from './misc/shipping-scales/shipping-scales.component';
import { TwistTiesComponent } from './misc/twist-ties/twist-ties.component';

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
  // MAILERS //
  { path: 'kraft-bubble-mailers', component: KraftBubbleComponent },
  { path: 'poly-bubble-mailers', component: PolyBubbleMailerComponent },
  { path: 'poly-mailer', component: PolyMailerComponent },
  // STRAPPING //
  { path: 'poly-strapping', component: PolyStrappingComponent },
  { path: 'poly-strapping-machine', component: PolyStrappingMachineComponent },
  { path: 'poly-strapping-tools', component: PolyStrappingToolsComponent },
  { path: 'steel-strapping', component: SteelStrappingComponent },
  { path: 'v-boards', component: VBoardsComponent },
  // STRETCH FILM //
  { path: 'hand-stretch-wrap', component: HandStretchWrapComponent },
  { path: 'machine-stretch-wrap', component: MachineStretchWrapComponent },
  { path: 'opaque-stretch-wrap', component: OpaqueStretchWrapComponent },
  { path: 'shrink-wrap-roll', component: ShrinkWrapRollComponent },
  { path: 'stretch-wrap-machinery', component: StretchWrapMachineryComponent },
  { path: 'shrink-wrap-system', component: ShrinkWrapSystemComponent },
  // TAPE //
  { path: 'carton-sealing-tape', component: CartonSealingTapeComponent },
  { path: 'colored-tape', component: ColoredTapeComponent },
  { path: 'custom-print-tape', component: CustomPrintTapeComponent },
  { path: 'filament-tape', component: FilamentTapeComponent },
  { path: 'masking-tape', component: MaskingTapeComponent },
  { path: 'office-tape-dispenser', component: OfficeTapeDispenserComponent},
  { path: 'tape-dispenser', component: TapeDispenserComponent },
  { path: 'vinyl-tape', component: VinylTapeComponent },
  { path: 'water-activated-gummed-tape', component: WaterActivatedGummedTapeComponent },
  // TOOLS & MACHINES //
  { path: 'air-pillow-machine', component: AirPillowMachineComponent },
  { path: 'glue-gun', component: GlueGunComponent },
  { path: 'poly-tubing-dispenser', component: PolyTubingDispenserComponent },
  { path: 'utility-knife', component: UtilityKnifeComponent },
  { path: 'wrapping-paper-dispenser', component: WrappingPaperDispenserComponent },
  // MISCELLANEOUS //
  { path: 'cable-ties', component: CableTiesComponent },
  { path: 'gloves-masks', component: GlovesMasksComponent },
  { path: 'metal-truck-seal', component: MetalTruckSealComponent },
  { path: 'shipping-scales', component: ShippingScalesComponent },
  { path: 'twist-ties', component: TwistTiesComponent },
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
