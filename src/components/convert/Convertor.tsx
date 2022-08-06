import ConvertInfo from "../converterInfo/ConvertInfo";
import { useAppDispatch, useAppSelector } from "../hooks/useRoot";
import { update } from "../features/converterSlice";
import "./convert.style.css";
import CurrenyRow from "../CurrencyRow/CurrenyRow";

const Convertor = () => {
  const initialState = useAppSelector((state) => state.options);

  const { base, convertTo, amount, result } = initialState;

  const dispatch = useAppDispatch();

  const convertToLower = convertTo.toLowerCase();
  const resDate = initialState.currenciesData[convertToLower]?.date;
  const total = (
    initialState.currenciesData[convertToLower]?.rate * Number(amount)
  ).toFixed(2);

  const handleBaseAmountChange = (value: number) => {   
    dispatch(
      update({
        ...initialState,
        amount: value,
        date: resDate,
        result: Number(total),
      })
    );
  };

  const handleBaseCurrencyChange = (value: string) => {
    dispatch(
      update({
        ...initialState,
        base: value,
        date: resDate,
        result: Number(total),
      })
    );
  };

  const handleConvertToCurrencyChange = (value: string) => {    
    dispatch(
      update({
        ...initialState,
        convertTo: value,
        date: resDate,
        result: Number(total),
      })
    );
  };

  const handleSwap = (e: unknown) => {
    dispatch(
      update({
        ...initialState,
        convertTo: base,
        base: convertTo,
        date: resDate,
        result: Number(total),
      })
    );
  };
  return (
    <section className="converter_wrapper">
      <ConvertInfo handleSwap={handleSwap} />
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
