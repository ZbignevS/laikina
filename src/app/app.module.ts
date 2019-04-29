import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './pages/hero/hero.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ProductsComponent } from './pages/products/products.component';
import { TemplatesComponent } from './pages/templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    PricingComponent,
    ProductsComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
