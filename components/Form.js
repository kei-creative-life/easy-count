import { useState, useContext, useRef } from "react";
import InputContext from "../contexts/InputContext";

export default function Form({ text, setText }) {
  const [num, setNum] = useContext(InputContext);
  return (
    <div className="w-full p-3">
      <label htmlFor="countForm">入力欄</label>
      <textarea
        id="countForm"
        className="w-full bg-blue-100 h-5/6 p-3"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        onClick={() => setText("")}
        disabled={text === ""}
        className="bg-blue-300 px-3 py-2"
      >
        リセット
      </button>
    </div>
  );
}
