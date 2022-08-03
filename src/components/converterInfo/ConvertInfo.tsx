import React, { FC } from "react";
import { useAppSelector } from "../hooks/useRoot";
import "./convertInfo.styles.css";

interface ConvertInfoProprs {
  handleSwap: (e: unknown) => void;
}

const ConvertInfo: FC<ConvertInfoProprs> = ({ handleSwap }) => {
  const initialState = useAppSelector((state) => state.options);
  const { base, amount, convertTo, result, date } = initialState;

  return (
    <div className="convertInfo_wrapper">
      <h3>
        {amount} {base} is equivalent to
      </h3>
      <h3>
        {isNaN(result) ? 0 : result} {convertTo}
      </h3>
      <p>As of {date?.toString()}</p>
      <h3 onClick={handleSwap}>
        <span>&#8595;&#8593;</span>
      </h3>
    </div>
  );
};

export default ConvertInfo;
