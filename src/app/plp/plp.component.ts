import { Component, OnInit } from '@angular/core';
import { ProductListingsService, ProductsData} from '../product-listings.service';

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.scss']
})
export class PlpComponent implements OnInit {

  products: object;

  constructor(private productListingService: ProductListingsService) {
  }

  ngOnInit() {
    this.productListingService.getProducts()
      .subscribe(
        (data: ProductsData) => this.products = data.data
      );
  }
}
