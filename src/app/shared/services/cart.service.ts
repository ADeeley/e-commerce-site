import { Injectable } from '@angular/core';
import { ProductObject } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  currentCart: ProductObject[] = [];

  constructor() { }

  addProduct(product: ProductObject) {
    this.currentCart.push(product);
    console.log(this.currentCart);
  }
}
