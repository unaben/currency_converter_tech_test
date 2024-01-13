import { RootState } from "../app/store";
import { useAppSelector } from "./useRoot";

export const useStoreData = () => {
  const currencyData = useAppSelector(
    (state: RootState) => state.options.currenciesData
  );

  let currencyOptions: string[] = [];

  const keys = Object.keys(currencyData);
  keys.forEach((key: string) => {
    currencyOptions.push(currencyData[key].code);
  });

  return currencyOptions;
};
