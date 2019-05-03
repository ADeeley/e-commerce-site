import { Injectable } from '@angular/core';
import { ProductObject } from 'src/app/shared/models/product.model';
import { CartProductObject } from 'src/app/shared/models/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  currentCart: CartProductObject[] = [];

  constructor() { console.log('aight'); }

  addProduct(product: ProductObject, qty: number, size: number) {
    const cartProduct = {
      ...product,
      qty,
      size,
    };
    console.log(product)
    this.currentCart.push(cartProduct);
    console.log(this.currentCart);
  }

  removeProduct(sku) {
    this.currentCart = this.currentCart.filter(product => product.SKU !== sku);
  }

  getCurrentCart() {
    return this.currentCart.slice();
  }

  getNumberOfProductsInCart() {
    return this.currentCart.length;
  }

}
