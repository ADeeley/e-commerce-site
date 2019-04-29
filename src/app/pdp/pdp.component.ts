import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductListingsService } from '../product-listings.service'

interface ProductObject {
  readonly SKU: string;
}
interface ProductsArray {
  readonly data?: Array<ProductObject>;
}

@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PdpComponent implements OnInit {
  product: object;
  SKU: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private productListingService: ProductListingsService) {
  }

  ngOnInit() {
    this.SKU = this.route.snapshot.params.sku;
    this.productListingService.getProducts().subscribe(
      (data: ProductsArray = null) => {
        this.product = data.data.filter((dataSku) => this.SKU === dataSku.SKU)[0];
        console.log(this.product);
      }
    );
  }
}
