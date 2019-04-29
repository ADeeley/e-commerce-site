import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ProductsData {
  readonly data?: object;
}

@Injectable({
  providedIn: 'root'
})
export class ProductListingsService {
  configUrl = 'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.configUrl);
  }
}
