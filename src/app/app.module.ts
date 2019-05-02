import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlpComponent } from './plp/plp.component';
import { ProductComponent } from './product/product.component';
import { PdpComponent } from './pdp/pdp.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartContentComponent } from './cart/cart-content/cart-content.component';
import { CartService } from './shared/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    PlpComponent,
    ProductComponent,
    PdpComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CartContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
