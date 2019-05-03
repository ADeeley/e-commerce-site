import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdpComponent } from './pdp/pdp.component';
import { PlpComponent } from './plp/plp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartContentComponent } from './cart/cart-content/cart-content.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'product/:sku', component: PdpComponent },
  { path: 'products/list', component: PlpComponent },
  { path: 'cart', component: CartContentComponent },
  { path: '', component: HomepageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
