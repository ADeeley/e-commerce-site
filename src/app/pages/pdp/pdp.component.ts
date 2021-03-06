import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListingsService, ProductsData } from '../../shared/services/product-listings.service';
import { ProductObject } from '../../shared/models/product.model';


@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PdpComponent implements OnInit {
  product = new ProductObject();
  SKU: string;

  constructor(
    private route: ActivatedRoute,
    private productListingService: ProductListingsService,
  ) {
  }

  ngOnInit() {
    this.SKU = this.route.snapshot.params.sku;
    this.productListingService.getProducts()
      .subscribe(
        (data: ProductsData) => {
          console.log(data);
          this.product = data.data.filter(dataSku => this.SKU === dataSku.SKU)[0];
        }
      );
  }
}
