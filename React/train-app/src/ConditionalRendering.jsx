import { useState } from "react";
function ConditionalRendering() {
      const [show, setShow] = useState(false);

  return (
     <div style={{ display:"flex",flexDirection:"row",textAlign: "center", marginLeft: "60px"}}>
      
      <h1>Conditional Rendering Example</h1>

      {/* Toggle button */}
      <button 
        onClick={() => setShow(!show)}
        style={{ padding: "10px 20px", marginTop: "20px",marginLeft:"20px" }}
      >
        {show ? "Hide Message" : "Show Message"}
      </button>
       {show && (
        <p style={{ fontSize: "20px",marginLeft:"20px",marginTop:"30px"}}>
          This message is shown only when "show" is true.
        </p>
      )}
      </div>
  )
}

export default ConditionalRendering;
