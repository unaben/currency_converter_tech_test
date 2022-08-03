import React, { ChangeEvent } from "react";
import BaseCurrency from "../base/BaseCurrency";
import ConvertInfo from "../converterInfo/ConvertInfo";
import ConvertToCurrency from "../convertTo/ConvertToCurrency";
import { useAppDispatch, useAppSelector } from "../hooks/useRoot";
import { update } from "../features/converterSlice";
import './convert.style.css'

const Convertor = () => {
  const initialState = useAppSelector((state) => state.options);

  const { base, convertTo, amount } = initialState;

  const convertToLower = convertTo.toLowerCase();
  const resDate = initialState.currenciesData[convertToLower]?.date;
  const total = (
    initialState.currenciesData[convertToLower]?.rate * Number(amount)
  ).toFixed(2);

  const dispatch = useAppDispatch();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    dispatch(
      update({
        ...initialState,
        amount: Number(e.target.value),
        date: resDate,
        result: Number(total),
      })
    );
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    dispatch(
      update({
        ...initialState,
        [name]: value,
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
      <BaseCurrency
        handleChangeInput={handleChangeInput}
        handleSelect={handleSelect}
      />
      <ConvertToCurrency handleSelect={handleSelect} />
    </section>
  );
};

export default Convertor;
