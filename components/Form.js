import { useState, useContext } from "react";
import InputContext from "../contexts/InputContext";

export default function Form() {
  const [text, setText] = useState("");
  const [num, setNum] = useContext(InputContext);
  return (
    <div className="w-full p-3">
      <label htmlFor="countForm">入力フォーム</label>
      <textarea
        id="countForm"
        className="w-full bg-blue-100 h-full p-3"
        onKeyUp={(e) => setText(e.target.value)}
        onChange={(e) => setNum(e.target.value.length)}
      />
    </div>
  );
}
