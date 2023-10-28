import { CurrencyType } from './CurrencyType.model';

export interface MenuItem {
  title: string;
  price: number;
  currency: CurrencyType;
  description: string;
}
