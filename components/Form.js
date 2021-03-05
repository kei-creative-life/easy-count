import { useContext } from "react";
import { darkModeContext } from "./Layout";

export default function Form({ text, setText }) {
  const darkMode = useContext(darkModeContext);
  console.log(darkMode);
  return (
    <div className="w-full p-3">
      <div>
        <h2
          className={"text-lg " + (darkMode ? "text-white " : "text-grey-300")}
        >
          記事タイトル
        </h2>
        <input
          type="text"
          className={
            " w-full p-2 mb-3 outline-none " +
            (darkMode ? "bg-gray-700 text-blue-400" : "bg-white")
          }
        />
      </div>
      <h2 className={"text-lg " + (darkMode ? "text-white " : "text-grey-300")}>
        記事入力欄
      </h2>
      <textarea
        id="countForm"
        className={
          "w-full h-4/6 p-3 outline-none " +
          (darkMode ? "bg-gray-700 text-blue-400" : "bg-white")
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        onClick={() => setText("")}
        disabled={text === ""}
        className={
          "mt-3 px-3 py-2 text-white rounded-md " +
          (darkMode ? "bg-blue-900" : "bg-blue-500")
        }
      >
        リセット
      </button>
    </div>
  );
}
