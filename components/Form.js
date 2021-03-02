import { useState, useContext } from "react";
import InputContext from "../contexts/InputContext";

export default function Form({ text, setText }) {
  const [num, setNum] = useContext(InputContext);
  const removeSpace = (event) => {
    let trimText = event.target.value.trim();
    let textResult = trimText.replace(/[ +\t]+/gm, "");
    let removeNewLine = textResult.replace(/\r?\n/g, "");
    setNum(removeNewLine.length);
  };
  return (
    <div className="w-full p-3">
      <label htmlFor="countForm">通常文字</label>
      <textarea
        id="countForm"
        className="w-full bg-blue-100 h-1/2 p-3"
        onKeyUp={(e) => setText(e.target.value)}
        onChange={(e) => removeSpace(e)}
      />
      <label htmlFor="countCode">コード</label>
      <textarea
        id="countCode"
        className="w-full bg-blue-100 h-1/2 p-3"
        onKeyUp={(e) => setText(e.target.value)}
        onChange={(e) => removeSpace(e)}
      />
    </div>
  );
}
