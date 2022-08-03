import React, { ChangeEvent, FC } from "react";
import { StoreData } from "../hooks/useCurrencyOptions";
import { useAppSelector } from "../hooks/useRoot";

interface ConvertToCurrencyProps {
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const ConvertToCurrency: FC<ConvertToCurrencyProps> = ({ handleSelect }) => {
  const currencies = StoreData();

  const initialState = useAppSelector((state) => state.options);
  const { convertTo, result } = initialState;
  return (
    <form className="">
      <input disabled={true} value={Number(result)} className="" />
      <select
        name="convertTo"
        value={convertTo}
        onChange={handleSelect}
        className=""
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

export default ConvertToCurrency;
