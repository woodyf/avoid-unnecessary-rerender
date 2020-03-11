import React, { useState, useCallback } from "react";
import RenderCounter from "./RenderCounter";

export default function B() {
  const [state, setState] = useState(false);
  const toggleState = useCallback(e => setState(s => !s), []);
  return (
    <div>
      <button onClick={toggleState}>toggle state</button>{" "}
      <span>current state : {state}</span>
      <RenderCounter />
    </div>
  );
}
