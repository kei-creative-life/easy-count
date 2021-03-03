import { useState, useContext, useRef } from "react";
import InputContext from "../contexts/InputContext";

export default function Form({ text, setText }) {
  const [num, setNum] = useContext(InputContext);
  return (
    <div className="w-full p-3">
      <div>
        <label className="text-lg">記事タイトル</label>
        <input type="text" className=" w-full bg-white p-2 mb-3 outline-none" />
      </div>
      <label htmlFor="countForm" className="text-lg">
        記事入力欄
      </label>
      <textarea
        id="countForm"
        className="w-full bg-white h-4/6 p-3 outline-none"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        onClick={() => setText("")}
        disabled={text === ""}
        className="bg-green-400 px-3 py-2 text-white rounded-md"
      >
        リセット
      </button>
    </div>
  );
}
