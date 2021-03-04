import { useState, useContext } from "react";
import { countTexts, countOnlyCode, sumOfAllTitles } from "../lib/wordCounts";
import { darkModeContext } from "./Layout";

export default function CountField({ text }) {
  const darkMode = useContext(darkModeContext);
  const [price, setPrice] = useState(0);
  const [codePrice, setCodePrice] = useState(0);
  const [checkBox, setCheckBox] = useState(false);
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
    <div className="w-full p-3">
      <h2 className={"text-lg " + (darkMode ? "text-white " : "text-grey-300")}>
        集計欄
      </h2>
      <div className="mb-2">
        <table className="min-w-full table-auto">
          <thead className="justify-between">
            <tr
              className={
                "border-4 " +
                (darkMode
                  ? "bg-blue-800 border-blue-800"
                  : "bg-blue-500 border-blue-500")
              }
            >
              <th className="py-2">
                <span className="text-white">タイプ</span>
              </th>
              <th className="w-1/5">
                <span className="text-white">文字数</span>
              </th>
              <th className="w-1/5">
                <span className="text-white">文字単価</span>
              </th>
              <th className="w-1/5">
                <span className="text-white">合計金額</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            <tr className="bg-white border-4 border-gray-200">
              <td className="text-center py-2">文字のみ</td>
              <td className="text-right">
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
                  className="outline-none text-right"
                  value={price}
                  min="0"
                  max="255"
                  id="unit-price"
                  type="number"
                  placeholder="〇〇円/文字"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
              <td className="text-right">
                <span>{priceOnlyWords(text)}</span>
              </td>
            </tr>
            <tr className="bg-white border-4 border-gray-200">
              <td className="text-center py-2">コードのみ</td>
              <td className="text-right">{countOnlyCode(text)}</td>
              <td className="text-right">
                <input
                  value={codePrice}
                  min="0"
                  max="255"
                  className="outline-none text-right"
                  id="unit-code-price"
                  type="number"
                  placeholder="〇〇円/文字"
                  onChange={(e) => setCodePrice(e.target.value)}
                />
              </td>
              <td className=" text-right">{priceOnlyCodes(text)}</td>
            </tr>
            <tr className="bg-white border-4 border-gray-200">
              <td className="text-center py-2">文字+コード</td>
              <td className="text-right">
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
      <h2 className={"text-lg " + (darkMode ? "text-white " : "text-grey-300")}>
        このアプリの特徴
      </h2>
      <div
        className={
          "w-full h-2/4 p-2 overflow-y-scroll text-lg " +
          (darkMode ? "bg-gray-700 text-white " : "bg-white")
        }
      >
        <ul>
          <li>1.動作がサクサク！変更が即反映されます。</li>
          <li>
            2.見出しを自動で判別！
            <br />
            （注：ただし##のように、マークダウン形式で書かれたものに限ります。）
          </li>
          <li>
            3.プログラミングのコードのみの文字数もカウント可能！
            <br />
            プログラミングに関する記事を書くライターに最適です。
          </li>
          <li>
            4.文字単価の違いにも対応可能！
            <br />
            通常の文字単価は2円だけど、コードは0.5円のように文字によって単価が違う場合に最適です。
          </li>
          <li>
            5.もちろん無料で利用可能！
            <br />
            文字数のカウントは、お金をかけずにさっさと楽しましょう！
          </li>
        </ul>
      </div>
    </div>
  );
}
