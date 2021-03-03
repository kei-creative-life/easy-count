import { useState, useContext, useRef } from "react";
import { darkModeContext } from "./Layout";

export default function Form({ text, setText }) {
  const darkMode = useContext(darkModeContext);
  const darkH2Title = () => {
    if (darkMode) {
      return "text-white text-lg";
    } else {
      return "text-grey-300 text-lg";
    }
  };
  const darkButton = () => {
    if (darkMode) {
      return "bg-purple-700 px-3 py-2 text-white rounded-md";
    } else {
      return "bg-blue-500 px-3 py-2 text-white rounded-md";
    }
  };
  return (
    <div className="w-full p-3">
      <div>
        <h2 className={darkH2Title()}>記事タイトル</h2>
        <input type="text" className=" w-full bg-white p-2 mb-3 outline-none" />
      </div>
      <h2 className={darkH2Title()}>記事入力欄</h2>
      <textarea
        id="countForm"
        className="w-full bg-white h-5/6 p-3 outline-none"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        onClick={() => setText("")}
        disabled={text === ""}
        className={darkButton()}
      >
        リセット
      </button>
    </div>
  );
}
