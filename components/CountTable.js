import { useState } from "react";
import { countTexts, countOnlyCode, sumOfAllTitles } from "../lib/wordCounts";
// import CodeExplanation from "./CodeExplanation";

export default function CountTable({
  darkMode,
  checkBox,
  text,
  price,
  codePrice,
  setCheckBox,
}) {
  const [displayExplanation, setDisplayExplanation] = useState(false);
  const countsOfAllWords = (text) => {
    if (checkBox) {
      return countTexts(text) + sumOfAllTitles(text);
    } else {
      return countTexts(text);
    }
  };
  const priceOnlyWords = (text) => {
    if (checkBox) {
      return Number(
        ((countTexts(text) + sumOfAllTitles(text)) * price).toFixed(0)
      );
    } else {
      return Number((countTexts(text) * price).toFixed(0));
    }
  };
  const priceOnlyCodes = (text) => {
    return Number((countOnlyCode(text) * codePrice).toFixed(0));
  };
  const priceOfTotal = (text) => {
    return priceOnlyWords(text) + priceOnlyCodes(text);
  };

  return (
    <>
      <div className="mb-2">
        <table className="min-w-full table-auto">
          <thead className="justify-between">
            <tr
              className={
                "border-4 " +
                (darkMode
                  ? "bg-blue-900 border-blue-900"
                  : "bg-blue-500 border-blue-500")
              }
            >
              <th className="py-2">
                <span className="text-xs text-white">タイプ</span>
              </th>
              <th className="w-1/5">
                <span className="text-xs text-white">文字数</span>
              </th>
              <th className="w-1/5">
                <span className="text-xs text-white">文字単価</span>
              </th>
              <th className="w-1/5">
                <span className="text-xs text-white">合計金額</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            <tr
              className={
                "border-4  " +
                (darkMode
                  ? "bg-gray-700 text-blue-400 border-gray-700"
                  : "bg-white border-gray-200")
              }
            >
              <td className="text-xs md:text-base text-center py-2">
                文字のみ
              </td>
              <td className="text-sm md:text-base text-right">
                {(() => {
                  if (checkBox) {
                    return (
                      <span>{countTexts(text) + sumOfAllTitles(text)}</span>
                    );
                  } else {
                    return <span>{countTexts(text)}</span>;
                  }
                })()}
              </td>
              <td className="text-right">
                <input
                  className={
                    "text-sm md:text-base outline-none text-right " +
                    (darkMode ? "bg-gray-700" : "bg-white")
                  }
                  value={price}
                  min="0"
                  max="255"
                  id="unit-price"
                  type="number"
                  placeholder="〇〇円/文字"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
              <td className="text-sm md:text-base text-right">
                <span>{priceOnlyWords(text)}</span>
              </td>
            </tr>
            <tr
              className={
                "border-4  " +
                (darkMode
                  ? "bg-gray-700 text-blue-400 border-gray-700"
                  : "bg-white border-gray-200")
              }
            >
              <td className="text-center py-2 flex justify-center items-center">
                <div className="flex relative">
                  <div
                    className={
                      "text-sm rounded-md bg-opacity-90 absolute top-2/4 text-left w-48 right-full bg-gray-900 p-3 " +
                      (displayExplanation ? "display" : "hidden")
                    }
                  >
                    <p>
                      マークダウン形式で書かれたプログラミングコードを指します。
                    </p>
                    <div className="hidden md:block bg-opacity-90 bg-gray-700 p-2 mt-3">
                      ```Ruby
                      <br />
                      &lt;h2&gt;見出し2です。&lt;h2&gt;
                      <br />
                      ```
                    </div>
                  </div>
                  <span
                    onMouseEnter={() => {
                      setDisplayExplanation(true);
                    }}
                    onMouseLeave={() => {
                      setDisplayExplanation(false);
                    }}
                  >
                    <svg
                      className="hidden md:block w-5 h-5 text-yellow-400 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-xs md:text-base ml-1">コードのみ</span>
                </div>
              </td>
              <td className="text-sm md:text-base text-right">
                {countOnlyCode(text)}
              </td>
              <td className="text-right">
                <input
                  value={codePrice}
                  step="0.1"
                  min="0"
                  max="255"
                  className={
                    "text-sm md:text-base outline-none text-right " +
                    (darkMode ? "bg-gray-700" : "bg-white")
                  }
                  id="unit-code-price"
                  type="number"
                  placeholder="〇〇円/文字"
                  onChange={(e) => setCodePrice(e.target.value)}
                />
              </td>
              <td className="text-sm md:text-base text-right">
                {priceOnlyCodes(text)}
              </td>
            </tr>
            <tr
              className={
                "border-4  " +
                (darkMode
                  ? "bg-gray-700 text-blue-400 border-gray-700"
                  : "bg-white border-gray-200")
              }
            >
              <td className="text-xs md:text-base text-center py-2">
                文字+コード
              </td>
              <td className="text-sm md:text-base text-right">
                {countsOfAllWords(text) + countOnlyCode(text)}
              </td>
              <td className="text-right"></td>
              <td className="text-right">{priceOfTotal(text)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-10">
        <input
          type="checkbox"
          onChange={(e) => setCheckBox(e.target.checked)}
        />
        <span
          className={"pl-2 " + (darkMode ? "text-white " : "text-grey-300")}
        >
          見出しの文字をカウントする
        </span>
      </div>
    </>
  );
}
