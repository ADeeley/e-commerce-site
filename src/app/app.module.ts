import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlpComponent } from './pages/plp/plp.component';

import { PdpComponent } from './pages/pdp/pdp.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CartContentComponent } from './pages/cart/cart-content/cart-content.component';
import { CartService } from './shared/services/cart.service';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SizesComponent } from './pages/pdp/sizes/sizes.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './pages/plp/product/product.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

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
    HomepageComponent,
    SizesComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
