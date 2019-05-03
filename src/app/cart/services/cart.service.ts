import { Injectable } from '@angular/core';
import { ProductObject } from 'src/app/shared/models/product.model';
import { CartProductObject } from 'src/app/shared/models/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  currentCart: CartProductObject[] = [];

  constructor() { console.log('aight'); }

  addProduct(newProduct: ProductObject, qty: number, size: number) {
    const cartProduct = {
      ...newProduct,
      qty,
      size,
    };

    // If we have a product in the cart already with a matching SKU
    const existingProduct = this.currentCart.filter(product => product.SKU === newProduct.SKU)[0];

    if (existingProduct && existingProduct.size === size) {
      existingProduct.qty++;
      return;
    }

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
