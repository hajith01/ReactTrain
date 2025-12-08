import { useState,useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
  console.log("Count updated:", count); 
}, [count]);
  return (
    <>
    <div style={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                }}>
      <h1 >{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      
    </div>
    </>
  );
}
export default Counter;
