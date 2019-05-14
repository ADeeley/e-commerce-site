import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductObject } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Input() product: ProductObject;
  quantity = 1;
  sizeSelected = '';
  failedSubmit = false;

  constructor(private cartService: CartService) { }

  addProduct(form: NgForm) {
    if (form.invalid) {
      this.failedSubmit = true;
      return;
    }
    this.cartService.addProduct(this.product, this.quantity, +this.sizeSelected);
    alert(`Added ${this.product.name} * ${this.quantity} to the cart.`);
  }
}
