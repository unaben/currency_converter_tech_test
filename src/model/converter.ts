export interface DataSlice {
  alphaCode: string;
  code: string;
  date: Date | null;
  inverseRate: number;
  name: string;
  numericCode: string;
  rate: number;
}

export type TCurrencyData = Record<string, DataSlice>;
