import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss']
})
export class SizesComponent {
  @Input() sizesAvailable: number[];

  constructor() { }

}
