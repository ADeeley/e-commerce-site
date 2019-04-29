import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

interface ProductsData {
  data?: object;
}
@Component({
  selector: 'app-pdp',
  templateUrl: './pdp.component.html',
  styleUrls: ['./pdp.component.scss']
})
export class PdpComponent implements OnInit {
  configUrl = 'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json';
  product: object;
  SKU: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  ngOnInit() {
    this.SKU = this.route.snapshot.params.sku;
    this.getConfig()
      .subscribe((data: ProductsData) => {
        //this.product = data.data.filter(product => product.SKU === this.SKU);
        console.log(this.product);
      });
  }


}
