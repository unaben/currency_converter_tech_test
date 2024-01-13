import moment from "moment";
import { useAppSelector } from "../../hooks/useRoot";
import "./convertInfo.styles.css";
import { RootState } from "../../app/store";
import useCurrencyConversion from "../../hooks/useCurrencyConversion";

const ConvertInfo = () => {
  const initialState = useAppSelector((state: RootState) => state.options);
  const { base, amount, convertTo, result, date } = initialState;

  const { handleSwap } = useCurrencyConversion();

  return (
    <div className="convertInfo_wrapper">
      <h3>
        {amount} {base} is equivalent to
      </h3>
      <h3>
        {isNaN(result) ? 0 : result} {convertTo}
      </h3>
      <p>
        As of &nbsp;
        {moment(date?.toString()).format("dddd, MMMM DD YYYY, h:mm:ss a")}
      </p>
      <h3 onClick={handleSwap}>
        <span>&#8595;&#8593;</span>
      </h3>
    </div>
  );
};

export default ConvertInfo;
