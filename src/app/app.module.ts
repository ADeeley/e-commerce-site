import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlpComponent } from './plp/plp.component';
import { ProductComponent } from './product/product.component';
import { PdpComponent } from './pdp/pdp.component';

@NgModule({
  declarations: [
    AppComponent,
    PlpComponent,
    ProductComponent,
    PdpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
