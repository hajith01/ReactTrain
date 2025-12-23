import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./redux";

export default function Counter2() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Counter: {count}</h1>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => dispatch(decrement())} style={{ marginRight: 8 }}>
          - Decrement
        </button>

        <button onClick={() => dispatch(increment())}>
          + Increment
        </button>
      </div>

      <div style={{ marginBottom: 12 }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          style={{ width: 80, marginRight: 8 }}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add Amount
        </button>
      </div>

      <div>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}
