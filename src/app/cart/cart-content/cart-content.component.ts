import { Component, OnInit } from '@angular/core';
import { ProductObject } from 'src/app/shared/models/product.model';
import { CartService } from '../services/cart.service';

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

  removeProduct(sku) {
    console.log(`Remove product with SKU: ${sku}`);
    this.cartService.removeProduct(sku);
    this.cartProducts = this.cartService.getCurrentCart();
  }
}
