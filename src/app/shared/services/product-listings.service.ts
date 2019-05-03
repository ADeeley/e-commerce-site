import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ProductObject } from '../../shared/models/product.model';

export interface ProductsData {
  readonly data: Array<ProductObject>;
}

@Injectable({
  providedIn: 'root'
})
export class ProductListingsService {
  configUrl = 'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Platform returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getProducts() {
    return this.http.get(this.configUrl)
      .pipe(
        catchError(this.handleError)
      );
  }
}
