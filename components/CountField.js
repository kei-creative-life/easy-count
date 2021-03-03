import { useState } from "react";
import { countTexts, countOnlyCode, sumOfAllTitles } from "../lib/wordCounts";

export default function CountField({ text }) {
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
      <h2 className="text-lg">集計欄</h2>
      <div className="mb-2">
        <table className="min-w-full table-auto">
          <thead className="justify-between">
            <tr className=" bg-green-400">
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
      <div className="mb-2">
        <input
          type="checkbox"
          onChange={(e) => setCheckBox(e.target.checked)}
        />
        見出しの文字をカウントする
      </div>
      {/* <table className="min-w-full table-auto">
        <thead className="justify-between">
          <tr className="bg-gray-400">
            <th className="py-2 w-1/2">
              <span className="text-gray-300">見出しタイプ</span>
            </th>
            <th className="w-1/2">
              <span className="text-gray-300">文字数</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          <tr className="bg-white border-4 border-gray-200">
            <td className="text-center"># 見出し1</td>
            <td className="text-right"> {sumOfH1Title(text)}</td>
          </tr>
          <tr className="bg-white border-4 border-gray-200">
            <td className="text-center">## 見出し2</td>
            <td className="text-right"> {sumOfH2Title(text)}</td>
          </tr>
          <tr className="bg-white border-4 border-gray-200">
            <td className="text-center">### 見出し3</td>
            <td className="text-right"> {sumOfH3Title(text)}</td>
          </tr>
          <tr className="bg-white border-4 border-gray-200">
            <td className="text-center">#### 見出し4</td>
            <td className="text-right"> {sumOfH4Title(text)}</td>
          </tr>
        </tbody>
      </table> */}
      <h2 className="text-lg">できること</h2>
      <div className="bg-white w-full h-1/4 p-2">
        <ul>
          <li>1.マークダウン形式で書かれた文字をカウントできます。</li>
          <li>2.コードを含んだ記事のカウントも可能です。</li>
          <li>3.文字のタイプによる単価の違いも計算可能です。</li>
        </ul>
      </div>
    </div>
  );
}
