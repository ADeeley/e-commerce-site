import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss']
})
export class SizesComponent {
  @Input() sizesAvailable: number[];
  @Output() sizeSelected = new Subject<number>();

  onSizeSelected(size) {
    this.sizeSelected.next(size);
    console.log(size);
  }

  constructor() { }

}
