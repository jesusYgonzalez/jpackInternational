import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { AntiStaticBagsComponent } from './products/bags/anti-static-bags/anti-static-bags.component';
import { AntiStaticBagsListComponent } from './products/bags/anti-static-bags/anti-static-bags-list/anti-static-bags-list.component';
import { BubblePouchesComponent } from './products/bags/bubble-pouches/bubble-pouches.component';
import { BubblePouchesListComponent } from './products/bags/bubble-pouches/bubble-pouches-list/bubble-pouches-list.component';
import { ClearPolyBagsComponent } from './products/bags/clear-poly-bags/clear-poly-bags.component';
import { ClearPolyBagsListComponent } from './products/bags/clear-poly-bags/clear-poly-bags-list/clear-poly-bags-list.component';
import { ClearReclosableBagsComponent } from './products/bags/clear-reclosable-bags/clear-reclosable-bags.component';
// tslint:disable-next-line:max-line-length
import { ClearReclosableBagsListComponent } from './products/bags/clear-reclosable-bags/clear-reclosable-bags-list/clear-reclosable-bags-list.component';
import { PolypropyleneBagsComponent } from './products/bags/polypropylene-bags/polypropylene-bags.component';
// tslint:disable-next-line:max-line-length
import { PolypropyleneBagsListComponent } from './products/bags/polypropylene-bags/polypropylene-bags-list/polypropylene-bags-list.component';
import { PolyTubingComponent } from './products/bags/poly-tubing/poly-tubing.component';
import { PolyTubingListComponent } from './products/bags/poly-tubing/poly-tubing-list/poly-tubing-list.component';
import { StaticShieldingBagsComponent } from './products/bags/static-shielding-bags/static-shielding-bags.component';
// tslint:disable-next-line:max-line-length
import { StaticShieldingBagsListComponent } from './products/bags/static-shielding-bags/static-shielding-bags-list/static-shielding-bags-list.component';
import { VacuumBagsComponent } from './products/bags/vacuum-bags/vacuum-bags.component';
import { VacuumBagsListComponent } from './products/bags/vacuum-bags/vacuum-bags-list/vacuum-bags-list.component';
import { BoxStaplerStaplesComponent } from './products/corrugated-boxes/box-stapler-staples/box-stapler-staples.component';
import { CorrugatedBoxesComponent } from './products/corrugated-boxes/corrugated-boxes/corrugated-boxes.component';
// tslint:disable-next-line:max-line-length
import { CorrugatedBulkContainersComponent } from './products/corrugated-boxes/corrugated-bulk-containers/corrugated-bulk-containers.component';
import { CorrugatedPadsComponent } from './products/corrugated-boxes/corrugated-pads/corrugated-pads.component';
import { CorrugatedMailersComponent } from './products/corrugated-boxes/corrugated-mailers/corrugated-mailers.component';
import { EasyFoldBoxesComponent } from './products/corrugated-boxes/easy-fold-boxes/easy-fold-boxes.component';
import { MailingTubesComponent } from './products/corrugated-boxes/mailing-tubes/mailing-tubes.component';
import { BubbleWrapComponent } from './products/cushioning/bubble-wrap/bubble-wrap.component';
import { BubbleWrapFoamDispenserComponent } from './products/cushioning/bubble-wrap-foam-dispenser/bubble-wrap-foam-dispenser.component';
import { CushioningFoamComponent } from './products/cushioning/cushioning-foam/cushioning-foam.component';
import { KraftWrappingPaperComponent } from './products/cushioning/kraft-wrapping-paper/kraft-wrapping-paper.component';
import { MiniAirSystemComponent } from './products/cushioning/mini-air-system/mini-air-system.component';
import { NewsprintWrappingPaperComponent } from './products/cushioning/newsprint-wrapping-paper/newsprint-wrapping-paper.component';
import { PackingPeanutsComponent } from './products/cushioning/packing-peanuts/packing-peanuts.component';
// tslint:disable-next-line:max-line-length
import { StandardComputerShippingFoamComponent } from './products/cushioning/standard-computer-shipping-foam/standard-computer-shipping-foam.component';
import { TissueWrappingPaperComponent } from './products/cushioning/tissue-wrapping-paper/tissue-wrapping-paper.component';
import { WrappingPaperDispenserComponent } from './products/cushioning/wrapping-paper-dispenser/wrapping-paper-dispenser.component';
import { CircleMailingLabelsComponent } from './products/labels-envelopes/circle-mailing-labels/circle-mailing-labels.component';
import { LaserLabelsComponent } from './products/labels-envelopes/laser-labels/laser-labels.component';
import { PackingListEnvelopesComponent } from './products/labels-envelopes/packing-list-envelopes/packing-list-envelopes.component';
import { ShippingHandlingLabelsComponent } from './products/labels-envelopes/shipping-handling-labels/shipping-handling-labels.component';
import { ThermalTransferComponent } from './products/labels-envelopes/thermal-transfer/thermal-transfer.component';
import { KraftBubbleComponent } from './products/mailers/kraft-bubble/kraft-bubble.component';
import { PolyBubbleMailerComponent } from './products/mailers/poly-bubble-mailer/poly-bubble-mailer.component';
import { PolyMailerComponent } from './products/mailers/poly-mailer/poly-mailer.component';
import { CorrugatedCornerPadsComponent } from './products/strapping/corrugated-corner-pads/corrugated-corner-pads.component';
import { FoamCornerPadsComponent } from './products/strapping/foam-corner-pads/foam-corner-pads.component';
import { PolyStrappingComponent } from './products/strapping/poly-strapping/poly-strapping.component';
import { PolyStrappingMachineComponent } from './products/strapping/poly-strapping-machine/poly-strapping-machine.component';
import { PolyStrappingToolsComponent } from './products/strapping/poly-strapping-tools/poly-strapping-tools.component';
import { SteelStrappingComponent } from './products/strapping/steel-strapping/steel-strapping.component';
import { VBoardsComponent } from './products/strapping/v-boards/v-boards.component';
import { HandStretchWrapComponent } from './products/stretch-film/hand-stretch-wrap/hand-stretch-wrap.component';
import { MachineStretchWrapComponent } from './products/stretch-film/machine-stretch-wrap/machine-stretch-wrap.component';
import { OpaqueStretchWrapComponent } from './products/stretch-film/opaque-stretch-wrap/opaque-stretch-wrap.component';
import { StretchWrapDispenserComponent } from './products/stretch-film/stretch-wrap-dispenser/stretch-wrap-dispenser.component';
import { StretchWrapMachineryComponent } from './products/stretch-film/stretch-wrap-machinery/stretch-wrap-machinery.component';
import { ShrinkWrapRollComponent } from './products/stretch-film/shrink-wrap-roll/shrink-wrap-roll.component';
import { ShrinkWrapSystemComponent } from './products/stretch-film/shrink-wrap-system/shrink-wrap-system.component';
import { CartonSealingTapeComponent } from './products/tape/carton-sealing-tape/carton-sealing-tape.component';
import { ColoredTapeComponent } from './products/tape/colored-tape/colored-tape.component';
import { CustomPrintTapeComponent } from './products/tape/custom-print-tape/custom-print-tape.component';
import { FilamentTapeComponent } from './products/tape/filament-tape/filament-tape.component';
import { MaskingTapeComponent } from './products/tape/masking-tape/masking-tape.component';
import { OfficeTapeDispenserComponent } from './products/tape/office-tape-dispenser/office-tape-dispenser.component';
import { TapeDispenserComponent } from './products/tape/tape-dispenser/tape-dispenser.component';
import { VinylTapeComponent } from './products/tape/vinyl-tape/vinyl-tape.component';
import { WaterActivatedGummedTapeComponent } from './products/tape/water-activated-gummed-tape/water-activated-gummed-tape.component';
import { AirPillowMachineComponent } from './products/tools-machines/air-pillow-machine/air-pillow-machine.component';
import { BoxStaplerComponent } from './products/tools-machines/box-stapler/box-stapler.component';
import { BubbleWrapDispenserComponent } from './products/tools-machines/bubble-wrap-dispenser/bubble-wrap-dispenser.component';
import { GlueGunComponent } from './products/tools-machines/glue-gun/glue-gun.component';
import { CableTiesComponent } from './products/misc/cable-ties/cable-ties.component';
import { DockBoardComponent } from './products/misc/dock-board/dock-board.component';
import { GlovesMasksComponent } from './products/misc/gloves-masks/gloves-masks.component';
import { MetalTruckSealComponent } from './products/misc/metal-truck-seal/metal-truck-seal.component';
import { ShippingScalesComponent } from './products/misc/shipping-scales/shipping-scales.component';
import { TwistTiesComponent } from './products/misc/twist-ties/twist-ties.component';
import { AboutComponent } from './navbar/about/about.component';
import { DeliveryComponent } from './navbar/delivery/delivery.component';
import { ContactUsComponent } from './navbar/contact-us/contact-us.component';
import { QuotationComponent } from './navbar/quotation/quotation.component';
import { OrderOnlineComponent } from './navbar/order-online/order-online.component';
import { HomeComponent } from './navbar/home/home.component';

// MD BOOTSTRAP //
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './core/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AntiStaticBagsComponent,
    AntiStaticBagsListComponent,
    BubblePouchesComponent,
    BubblePouchesListComponent,
    ClearPolyBagsComponent,
    ClearPolyBagsListComponent,
    ClearReclosableBagsComponent,
    ClearReclosableBagsListComponent,
    PolypropyleneBagsComponent,
    PolypropyleneBagsListComponent,
    PolyTubingComponent,
    PolyTubingListComponent,
    StaticShieldingBagsComponent,
    StaticShieldingBagsListComponent,
    VacuumBagsComponent,
    VacuumBagsListComponent,
    BoxStaplerStaplesComponent,
    CorrugatedBoxesComponent,
    CorrugatedBulkContainersComponent,
    CorrugatedPadsComponent,
    CorrugatedMailersComponent,
    EasyFoldBoxesComponent,
    MailingTubesComponent,
    BubbleWrapComponent,
    BubbleWrapFoamDispenserComponent,
    CushioningFoamComponent,
    KraftWrappingPaperComponent,
    MiniAirSystemComponent,
    NewsprintWrappingPaperComponent,
    PackingPeanutsComponent,
    StandardComputerShippingFoamComponent,
    TissueWrappingPaperComponent,
    WrappingPaperDispenserComponent,
    CircleMailingLabelsComponent,
    LaserLabelsComponent,
    PackingListEnvelopesComponent,
    ShippingHandlingLabelsComponent,
    ThermalTransferComponent,
    KraftBubbleComponent,
    PolyBubbleMailerComponent,
    PolyMailerComponent,
    CorrugatedCornerPadsComponent,
    FoamCornerPadsComponent,
    PolyStrappingComponent,
    PolyStrappingMachineComponent,
    PolyStrappingToolsComponent,
    SteelStrappingComponent,
    VBoardsComponent,
    HandStretchWrapComponent,
    MachineStretchWrapComponent,
    OpaqueStretchWrapComponent,
    StretchWrapDispenserComponent,
    StretchWrapMachineryComponent,
    ShrinkWrapRollComponent,
    ShrinkWrapSystemComponent,
    CartonSealingTapeComponent,
    ColoredTapeComponent,
    CustomPrintTapeComponent,
    FilamentTapeComponent,
    MaskingTapeComponent,
    OfficeTapeDispenserComponent,
    TapeDispenserComponent,
    VinylTapeComponent,
    WaterActivatedGummedTapeComponent,
    AirPillowMachineComponent,
    BoxStaplerComponent,
    BubbleWrapDispenserComponent,
    GlueGunComponent,
    CableTiesComponent,
    DockBoardComponent,
    GlovesMasksComponent,
    MetalTruckSealComponent,
    ShippingScalesComponent,
    TwistTiesComponent,
    AboutComponent,
    DeliveryComponent,
    ContactUsComponent,
    QuotationComponent,
    OrderOnlineComponent,
    HomeComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
