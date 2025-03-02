import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { increment, decrement } from "../../slices/counterSlice";
import "./style.scss"; // Zmień rozszerzenie na SCSS

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <button type="button" onClick={() => dispatch(decrement())}>
        &lt;
      </button>
      <div className="counter-value">{count.toString().padStart(3, "0")}</div>
      <button type="button" onClick={() => dispatch(increment())}>
        &gt;
      </button>
    </div>
  );
};

export default Counter;
