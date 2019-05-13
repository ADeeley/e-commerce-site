import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { CartProductObject } from 'src/app/shared/models/cart-product.model';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.scss']
})
export class CartContentComponent implements OnInit {

  cartProducts: CartProductObject[];
  total: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    console.log(this.cartService.currentCart);
    this.cartProducts = this.cartService.getCurrentCart();
    this.total = this.cartService.getCartTotal();
  }

  removeProduct(sku, size) {
    console.log(`Remove product with SKU: ${sku}`);
    this.cartService.removeProduct(sku, size);
    this.cartProducts = this.cartService.getCurrentCart();
  }
}
