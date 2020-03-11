import React, { useState } from "react";
import Intro from "./Intro";
import Memo from "./Memo";
import Constant from "./Constant";
import Memoize from "./Memoize";
import Refactor from "./Refactor";

const contentMapping = {
  Intro,
  Memo,
  Constant,
  Memoize,
  Refactor
};

export default function App() {
  const [content, setContent] = useState("Intro");
  const Content = contentMapping[content];
  return (
    <div>
      <button onClick={e => setContent("Intro")}> 1.Intro </button>
      <button onClick={e => setContent("Memo")}> 2.Memo </button>
      <button onClick={e => setContent("Constant")}> 3.Constant </button>
      <button onClick={e => setContent("Memoize")}> 4.Memoize </button>
      <button onClick={e => setContent("Refactor")}> 5.Refactor </button>
      <Content />
    </div>
  );
}
