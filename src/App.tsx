import React, { FC } from "react";
import "./App.css";
import Convertor from "./components/convert/Convertor";
import { useAppDispatch } from "./hooks/useRoot";
import { useEffect } from "react";
import { getCurrency } from "./app/features/converterSlice";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrency());
  }, [dispatch]);

  return (
    <div className="container">
      <Convertor />
    </div>
  );
};

export default App;
