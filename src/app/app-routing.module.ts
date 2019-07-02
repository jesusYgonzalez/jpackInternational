import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navbar/home/home.component';
import { AboutComponent } from './navbar/about/about.component';
import { ContactUsComponent } from './navbar/contact-us/contact-us.component';
import { DeliveryComponent } from './navbar/delivery/delivery.component';
import { OrderOnlineComponent } from './navbar/order-online/order-online.component';
import { QuotationComponent } from './navbar/quotation/quotation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'order', component: OrderOnlineComponent },
  { path: 'quotation', component: QuotationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}





