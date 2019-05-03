import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdpComponent } from './pages/pdp/pdp.component';
import { PlpComponent } from './pages/plp/plp.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CartContentComponent } from './pages/cart/cart-content/cart-content.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

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
