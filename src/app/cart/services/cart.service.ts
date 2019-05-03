import { Injectable } from '@angular/core';
import { ProductObject } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  currentCart: ProductObject[] = [];

  constructor() { console.log('aight'); }

  addProduct(product: ProductObject) {
    this.currentCart.push(product);
    console.log(this.currentCart);
  }

  removeProduct(sku) {
    this.currentCart = this.currentCart.filter(product => product.SKU !== sku);
  }

  getCurrentCart() {
    return this.currentCart.slice();
  }
}
