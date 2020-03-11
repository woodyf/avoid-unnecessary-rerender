import React from "react";

export default function Intro() {
  return (
    <div>
      <h3>避免不必要的rerender</h3>
      <p>child Component會在以下狀況rerender：</p>
      <ol>
        <li>parent rerender時</li>
        <li>component內的hook回傳值改變時</li>
      </ol>
      <p>
        我們可以避免的狀況是
        <br />
        child component本身的input (props) 完全沒變時
        <br />
        由parent觸發的rerender
        <br />
        因為我們預期output會相同
        <br />
        其實根本不用重跑一次function
      </p>
      <h4>Refactor步驟</h4>
      <ol>
        <li>以React.memo HOC 包裹child Component</li>
        <li>抽出常數props</li>
        <li>memoize(快取)props</li>
        <li>將Component做適當的切分</li>
      </ol>
    </div>
  );
}
