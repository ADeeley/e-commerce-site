import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  productsInCart() {
    return this.cartService.getNumberOfProductsInCart();
  }

}
