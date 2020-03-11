import React, { memo, useState, useCallback } from "react";
import Demo from "./Demo";

// 以memo包裹
const MemoizedDemo = memo(Demo);

export default function Memo() {
  const [state, setState] = useState(0);
  const updateCounter = useCallback(e => setState(s => s + 1), []);
  return (
    <div>
      <pre>
        {`
React.memo 是一個higher-order component
讓wrapped component獲得
"當previous props shallow equals new props時，直接使用上次render的結果"
的效果

e.g. props中有兩個key：name, val
則當 prevProps.name === newProps.name 
&& prevProps.val === newProps.val 時
跳過render
          `}
      </pre>
      <button onClick={updateCounter}>rerender Parent</button>{" "}
      <span>parent current count : {state}</span>
      <Demo text="without memo()" />
      <MemoizedDemo text="with memo()" />
    </div>
  );
}
