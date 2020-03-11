import React, { useState, useCallback } from "react";
import PureDemo from "./PureDemo";

// 抽出constant
// style object
const style = { height: 10, width: 10, backgroundColor: "yellow" };
// function
const getText = () => "use constant prop";

export default function Constant() {
  const [state, setState] = useState(0);
  const updateCounter = useCallback(e => setState(s => s + 1), []);
  return (
    <div>
      <pre>
        {`
要傳給child的props
如果inline直接寫在jsx上
會在每次render時都產生一個新的instance
除了string "aaa" === "aaa" 外

物件               {a : "a"}
JSX element       <div>Hello</div>
function          () => "someText"

都會導致前後兩次render產生的instance不相等 (!==)
無法透過memo優化
故要將能抽成constant的prop抽出
在function外先定義
        `}
      </pre>
      <button onClick={updateCounter}>rerender Parent</button>{" "}
      <span>parent current count : {state}</span>
      <PureDemo getText={getText} style={style} />
      <PureDemo
        // DO NOT DO THIS!! inline function prop
        getText={() => "use new getText() on every render"}
        style={style}
      />
      <PureDemo
        text="use new style Object on every render"
        // DO NOT DO THIS!! inline object prop
        style={{ height: 10, width: 10, backgroundColor: "red" }}
      />
    </div>
  );
}
