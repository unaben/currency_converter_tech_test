import { TCurrencyData } from "../../model/converter";

export interface ConverterSliceState {
  currenciesData: TCurrencyData ;
  base: string;
  amount: number;
  convertTo: string;
  result: number;
  date: Date | null;
  pending: boolean;
  error: boolean;
}
