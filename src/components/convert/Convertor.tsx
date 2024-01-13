import ConvertInfo from "../converterInfo/ConvertInfo";

import "./convert.style.css";
import CurrenyRow from "../CurrencyRow/CurrenyRow";
import useCurrencyConversion from "../../hooks/useCurrencyConversion";
import { RootState } from "../../app/store";
import { useAppSelector } from "../../hooks/useRoot";

const Convertor = () => {
  const initialState = useAppSelector((state: RootState) => state.options);
  const { base, convertTo, amount, result } = initialState;
  const {
    handleBaseAmountChange,
    handleBaseCurrencyChange,
    handleConvertToCurrencyChange,
  } = useCurrencyConversion();

  return (
    <section className="converter_wrapper">
      <ConvertInfo />
      <CurrenyRow
        onAmountChange={handleBaseAmountChange}
        onCurrencyChange={handleBaseCurrencyChange}
        selectedCurrency={base}
        amount={amount}
        readonly={false}
      />
      <CurrenyRow
        onAmountChange={handleBaseAmountChange}
        onCurrencyChange={handleConvertToCurrencyChange}
        selectedCurrency={convertTo}
        amount={result}
        readonly={true}
      />
    </section>
  );
};

export default Convertor;
