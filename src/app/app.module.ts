import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SideNavComponent } from './core/side-nav/side-nav.component';
import { ProductsComponent } from './products/products.component';
import { AntiStaticBagsComponent } from './products/bags/anti-static-bags/anti-static-bags.component';
import { AntiStaticBagsListComponent } from './products/bags/anti-static-bags/anti-static-bags-list/anti-static-bags-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ProductsComponent,
    AntiStaticBagsComponent,
    AntiStaticBagsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
