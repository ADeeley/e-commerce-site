import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdpComponent } from './pdp/pdp.component';
import { PlpComponent } from './plp/plp.component';

const routes: Routes = [
  { path: 'product/:sku', component: PdpComponent},
  { path: 'products/list', component: PlpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
