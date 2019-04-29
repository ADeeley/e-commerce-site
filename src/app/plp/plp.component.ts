import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ProductsData {
  data?: object;
}
@Component({
  selector: 'app-plp',
  templateUrl: './plp.component.html',
  styleUrls: ['./plp.component.scss']
})

export class PlpComponent implements OnInit {

  configUrl = 'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json';
  products;

  constructor(private http: HttpClient) {
  }

  getConfig() {
    return this.http.get(this.configUrl);
  }

  ngOnInit() {
    this.getConfig()
      .subscribe((data: ProductsData = null) => {
        if (data) {
          this.products = data.data;
          console.log(this.products);
        } else {
          // Panic
        }
      });
  }
}
