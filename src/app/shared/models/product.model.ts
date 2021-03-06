import { MoneyObject } from './money.model';

export class ProductObject {

  constructor(
    public SKU: string = '',
    public name: string = '',
    public mainImage: string = '',
    public colour: string = '',
    public price: MoneyObject = new MoneyObject(),
    public sizes: Array<string> = [],
  ) { }
}
