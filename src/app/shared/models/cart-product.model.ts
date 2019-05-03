import { MoneyObject } from './money.model';

export class CartProductObject {

  constructor(
    public qty: number = 1,
    public size: number,
    public colour: string,
    public mainImage: string = '',
    public SKU: string = '',
    public name: string = '',
    public price: MoneyObject = new MoneyObject(),
  ) { }
}
