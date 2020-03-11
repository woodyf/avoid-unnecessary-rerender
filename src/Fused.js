import React, { useState, useCallback } from "react";
import RenderCounter from "./RenderCounter";

export default function Fused() {
  const [state, setState] = useState(0);
  const updateCounter = useCallback(e => setState(s => s + 1), []);
  const [boolState, setBoolState] = useState(false);
  const toggleState = useCallback(e => setBoolState(s => !s), []);
  return (
    <div>
      <div>
        <button onClick={updateCounter}>add Counter</button>{" "}
        <span>current count : {state}</span>
        <RenderCounter />
      </div>
      <hr />
      <div>
        <button onClick={toggleState}>toggle state</button>{" "}
        <span>current state : {boolState}</span>
        <RenderCounter />
      </div>
    </div>
  );
}
