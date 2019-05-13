import { Component, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductObject } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss']
})
export class SizesComponent {
  @Input() product: ProductObject;
  quantity = 1;
  size: string;
  sizePlaceholder = '';
  failedSubmit = false;

  constructor(private cartService: CartService) { }

  addProduct(form: NgForm) {
    if (form.invalid) {
      console.log('invalid form');
      this.failedSubmit = true;
      return;
    }
    this.cartService.addProduct(this.product, this.quantity, +this.size);
  }
}
