import React, { ChangeEvent, FC } from "react";
import { StoreData } from "../hooks/useCurrencyOptions";
import { useAppSelector } from "../hooks/useRoot";

interface BaseCurrencyProps {
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const BaseCurrency: FC<BaseCurrencyProps> = ({
  handleChangeInput,
  handleSelect,
}) => {
  const initialState = useAppSelector((state) => state.options);
  const currencies = StoreData();

  const { amount, base } = initialState;

  return (
    <form className="form-inline mb-4">
      <input
        type="number"
        value={Number(amount)}
        onChange={handleChangeInput}
        className="form-control form-control-lg mx-5"
      />
      <select
        name="base"
        value={base}
        onChange={handleSelect}
        className="form-control form-control-lg"
      >
        {currencies &&
          currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
      </select>
    </form>
  );
};

export default BaseCurrency;
