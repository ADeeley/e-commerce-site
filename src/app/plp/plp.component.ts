import { Component, OnInit } from '@angular/core';
import { ProductListingsService } from '../product-listings.service';

interface ProductsData {
  data?: object;
}

@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.scss']
})
export class PlpComponent implements OnInit {

  products: ProductsData;

  constructor(private productListingService: ProductListingsService) {
  }

  ngOnInit() {
    this.productListingService.getProducts().subscribe(
      (data: ProductsData = null) => this.products = data.data
    );
  }
}
