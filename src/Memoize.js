import React, { useState, useCallback, useMemo } from "react";
import PureDemo from "./PureDemo";

export default function Memoize() {
  const [state, setState] = useState(0);
  const updateCounter = useCallback(e => setState(s => s + 1), []);
  const [random, setRandom] = useState(Math.random());
  const reroll = useCallback(e => setRandom(Math.random()), []);
  const style = useMemo(
    () => ({
      height: 10,
      width: 10,
      backgroundColor:
        random > 0.33 ? (random > 0.66 ? "red" : "yellow") : "blue"
    }),
    [random]
  );
  const getText = useCallback(() => "current random = " + random, [random]);
  return (
    <div>
      <p>
        memoize: 將運算的output
        cache住，當input在某個限度下沒有變動時，直接取用cache中的output
      </p>
      <pre>
        {`
當要傳給child的props需要透過運算生成
卻又無法抽出為常數時
可利用hook進行momoize

除了省去不必要的運算外
還能確保在dependency沒改變的情況下
每次都回傳同一個物件/function 

本範例中
在random沒改變的情況下
style物件或是getText function其實都不需要改變
但必須用useMemo memoize物件
以useCallback memoize function
才會得到同一個instance以避免rerender

將random放在hook的dependecy中[random]
代表在random改變時才去重新進行運算
否則直接取上次運算的結果
        `}
      </pre>
      <button onClick={updateCounter}>rerender Parent</button>{" "}
      <span>parent current count : {state}</span>{" "}
      <button title="(真的會導致style/ getText改變)" onClick={reroll}>
        更新random
      </button>
      <PureDemo getText={getText} style={style} />
      <PureDemo
        getText={getText}
        // DO NOT DO THIS!!  object prop not memoized
        style={{
          height: 10,
          width: 10,
          backgroundColor:
            random > 0.33 ? (random > 0.66 ? "red" : "yellow") : "blue"
        }}
      />
      <PureDemo
        // DO NOT DO THIS!! function prop not memoized
        getText={() => "current random = " + random}
        style={style}
      />
    </div>
  );
}
