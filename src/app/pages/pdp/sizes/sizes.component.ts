import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss']
})
export class SizesComponent {
  @Input() sizesAvailable: number[];
  @Output() sizeSelected = new EventEmitter<number>();

  onSizeSelected(size) {
    this.sizeSelected.emit(size);
    console.log(size);
  }

  constructor() { }

}
