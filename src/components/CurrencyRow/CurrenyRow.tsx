import React, { FC } from "react";
import { StoreData } from "../hooks/useCurrencyOptions";

interface CurrenyRowProps {
  onAmountChange: (e: number) => void;
  onCurrencyChange: (e: string) => void;
  selectedCurrency: string;
  amount: number;
  readonly: boolean;
  valMessage: string;
}

const CurrenyRow: FC<CurrenyRowProps> = ({
  onAmountChange,
  onCurrencyChange,
  selectedCurrency,
  amount,
  readonly,
  valMessage,
}) => {
  const currencies = StoreData();
  return (
    <div>
      {typeof amount === "string" && <span>{valMessage}</span>}
      <div>
        <input
          type="number"
          readOnly={readonly}
          value={Number(amount)}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="form-control form-control-lg mx-5"
        />
        <select
          name="base"
          id=""
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="form-control form-control-lg"
        >
          {currencies &&
            currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default CurrenyRow;
