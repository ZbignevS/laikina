import { TemplatesComponent } from './pages/templates/templates.component';
import { ProductsComponent } from './pages/products/products.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { HeroComponent } from './pages/hero/hero.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // routingo importas

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'pricing', component: PricingComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'templates', component: TemplatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
