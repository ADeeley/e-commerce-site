import { Injectable } from '@angular/core';
import { ProductObject } from '../models/product.model';

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

  getCurrentCart() {
    return this.currentCart.slice();
  }
}
