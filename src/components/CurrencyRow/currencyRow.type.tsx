export interface ICurrenyRowProps {
  onAmountChange: (e: number) => void;
  onCurrencyChange: (e: string) => void;
  selectedCurrency: string;
  amount: number;
  readonly: boolean;
}
