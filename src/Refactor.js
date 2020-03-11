import React from "react";
import A from "./A";
import B from "./B";
import Fused from "./Fused";

export default function Constant() {
  return (
    <div>
      <pre>
        {`
兩個state如果寫在同一個component中管理
那只要其中一個state update
整個component就得rerender
恰當的切分component可以避免不必要的rerender
        `}
      </pre>
      <p>A、B分開</p>
      <A />
      <hr />
      <B />
      <p>A、B未分開</p>
      <Fused />
    </div>
  );
}
