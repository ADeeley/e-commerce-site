import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductObject } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.scss']
})
export class CartContentComponent implements OnInit {

  cartProducts: ProductObject[];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    console.log(this.cartService.currentCart);
    this.cartProducts = this.cartService.getCurrentCart();
  }
}
