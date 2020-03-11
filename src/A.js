import React, { useState, useCallback } from "react";
import RenderCounter from "./RenderCounter";

export default function A() {
  const [state, setState] = useState(0);
  const updateCounter = useCallback(e => setState(s => s + 1), []);
  return (
    <div>
      <button onClick={updateCounter}>add Counter</button>{" "}
      <span>current count : {state}</span>
      <RenderCounter />
    </div>
  );
}
