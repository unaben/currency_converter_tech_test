import { useAppSelector } from "./useRoot";

export const StoreData = () => {
  const currencyData = useAppSelector((state) => state.options.currenciesData);

  let currencyOptions: string[] = [];

  const keys = Object.keys(currencyData);
  keys.forEach((key) => {
    currencyOptions.push(currencyData[key].code);
  });

  return currencyOptions;
};
