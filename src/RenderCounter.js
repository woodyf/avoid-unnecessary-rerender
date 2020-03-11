import React, { useRef } from "react";

export default function RenderCounter() {
  const counter = useRef(0);
  counter.current = counter.current + 1;
  return (
    <div>
      <span>rendered {counter.current} times</span>
    </div>
  );
}
