import React from "react";
import { update } from "../app/features/converterSlice";
import { useAppSelector, useAppDispatch } from "./useRoot";
import { RootState } from "../app/store";

const useCurrencyConversion = () => {
  const initialState = useAppSelector((state: RootState) => state.options);

  const { base, convertTo, amount } = initialState;

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

  const handleSwap = () => {
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

  return {
    handleBaseAmountChange,
    handleBaseCurrencyChange,
    handleConvertToCurrencyChange,
    handleSwap,
  };
};

export default useCurrencyConversion;
