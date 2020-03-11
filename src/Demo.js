import React from "react";
import RenderCounter from "./RenderCounter";

const getEmptyText = () => "";
const rootStyle = {
  border: "solid black 1px",
  backgroundColor: "cyan",
  margin: 5
};
export default function Demo({
  style = {},
  text = "",
  getText = getEmptyText
}) {
  return (
    <div style={rootStyle}>
      <div style={style} />
      <h4>{text || getText()}</h4>
      <RenderCounter />
    </div>
  );
}
