import { useState, useContext } from "react";
import InputContext from "../contexts/InputContext";

export default function CountField({ text }) {
  const [num, setNum] = useContext(InputContext);
  const [price, setPrice] = useState(0);
  const [codePrice, setCodePrice] = useState(0);

  // 文字＆コード合計（空白&段落省く）
  const allCountTexts = (t) => {
    return t.replace(/[ +\t]+/gm, "").replace(/\r?\n/g, "");
  };

  // 文字のみ（段落&コードを省く）
  const countTexts = (t) => {
    let onlyTitles = t.match(/^#+ .+\n/gm);
    if (onlyTitles) {
      let allTitles = onlyTitles.map((value) => {
        return value.length;
      });
      let numOfAllTitles = allTitles.reduce((a, b) => {
        return a + b;
      });
      return allCountTexts(t).length - numOfAllTitles - countCode(t);
    } else {
      return allCountTexts(t).length;
    }
  };

  // コード部分を抜粋
  const countCode = (t) => {
    let fixT = t.replace(/[ +\t]+/gm, "").replace(/\r?\n/g, "");
    let onlyCodes = fixT.match(/```[a-zA-Z]+([^```]*)```/gm);
    if (onlyCodes) {
      let onlyCode = onlyCodes.map((code) => {
        return code.length;
      });
      let sumOnlyCode = onlyCode.reduce((a, b) => {
        return a + b;
      });
      return sumOnlyCode;
    } else {
      return 0;
    }
  };

  // 純粋なコードの中身だけ抜粋
  const countOnlyCode = (t) => {
    let freshCode = t.replace(/[ +\t]+/gm, "").replace(/\r?\n/g, "");
    let onlyCodes = freshCode.match(/```[a-zA-Z]+([^```]*)```/gm);
    if (onlyCodes) {
      let onlyCode = onlyCodes.map((code) => {
        return code.replace(/```/gm, "").length;
      });
      let sumOnlyCode = onlyCode.reduce((a, b) => {
        return a + b;
      });
      return sumOnlyCode;
    } else {
      return 0;
    }
  };

  // 見出しの文字数
  const sumOfH1Title = (t) => {
    let h1TitleArray = t.match(/^# .+/gm);
    if (h1TitleArray) {
      let removedOthersForH1 = h1TitleArray.map((value) => {
        return value.replace(/^# /gm, "").replace(/[ +　+]/gm, "").length;
      });
      let numOfH1Title = removedOthersForH1.reduce((a, b) => {
        return a + b;
      });
      return numOfH1Title;
    } else {
      return 0;
    }
  };

  const sumOfH2Title = (t) => {
    let h2TitleArray = t.match(/^## .+/gm);
    if (h2TitleArray) {
      let removedOthersForH2 = h2TitleArray.map((value) => {
        return value.replace(/^## /gm, "").replace(/[ +　+]/gm, "").length;
      });
      let numOfH2Title = removedOthersForH2.reduce((a, b) => {
        return a + b;
      });
      return numOfH2Title;
    } else {
      return 0;
    }
  };
  const sumOfH3Title = (t) => {
    let h3TitleArray = t.match(/^### .+/gm);
    if (h3TitleArray) {
      let removedOthersForH3 = h3TitleArray.map((value) => {
        return value.replace(/^### /gm, "").replace(/[ +　+]/gm, "").length;
      });
      let numOfH3Title = removedOthersForH3.reduce((a, b) => {
        return a + b;
      });
      return numOfH3Title;
    } else {
      return 0;
    }
  };
  const sumOfH4Title = (t) => {
    let h4TitleArray = t.match(/^#### .+/gm);
    if (h4TitleArray) {
      let removedOthersForH4 = h4TitleArray.map((value) => {
        return value.replace(/^#### /gm, "").replace(/[ +　+]/gm, "").length;
      });
      let numOfH4Title = removedOthersForH4.reduce((a, b) => {
        return a + b;
      });
      return numOfH4Title;
    } else {
      return 0;
    }
  };

  return (
    <div className="w-full p-3">
      <h2 className="text-lg">集計欄</h2>
      <div className="mb-2">
        <table class="min-w-full table-auto">
          <thead class="justify-between">
            <tr class=" bg-green-400">
              <th class="py-2">
                <span class="text-white">タイプ</span>
              </th>
              <th class="w-1/5">
                <span class="text-white">文字数</span>
              </th>
              <th class="w-1/5">
                <span class="text-white">文字単価</span>
              </th>
              <th class="w-1/5">
                <span class="text-white">合計金額</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-200">
            <tr class="bg-white border-4 border-gray-200">
              <td class="text-center py-2">文字のみ</td>
              <td class="text-right">
                {countTexts(text) +
                  sumOfH1Title(text) +
                  sumOfH2Title(text) +
                  sumOfH3Title(text) +
                  sumOfH4Title(text)}
              </td>
              <td class="text-right">
                <input
                  class="outline-none text-right"
                  id="unit-price"
                  type="number"
                  placeholder="〇〇円/文字"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </td>
              <td class="text-right">{countTexts(text) * price}</td>
            </tr>
            <tr class="bg-white border-4 border-gray-200">
              <td class="text-center py-2">コードのみ</td>
              <td class="text-right">{countOnlyCode(text)}</td>
              <td class="text-right">
                <input
                  class="outline-none text-right"
                  id="unit-code-price"
                  type="number"
                  placeholder="〇〇円/文字"
                  onChange={(e) => setCodePrice(e.target.value)}
                />
              </td>
              <td class=" text-right">{countOnlyCode(text) * codePrice}</td>
            </tr>
            <tr class="bg-white border-4 border-gray-200">
              <td class="text-center py-2">文字+コード</td>
              <td class="text-right">
                {Math.round(countTexts(text) + countOnlyCode(text))}
              </td>
              <td class="text-right"></td>
              <td class="text-right">
                {countTexts(text) * price + countOnlyCode(text) * codePrice}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mb-2">
        <input type="checkbox" />
        見出しの文字をカウントする
      </div>
      {/* <table class="min-w-full table-auto">
        <thead class="justify-between">
          <tr class="bg-gray-400">
            <th class="py-2 w-1/2">
              <span class="text-gray-300">見出しタイプ</span>
            </th>
            <th class="w-1/2">
              <span class="text-gray-300">文字数</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
          <tr class="bg-white border-4 border-gray-200">
            <td class="text-center"># 見出し1</td>
            <td class="text-right"> {sumOfH1Title(text)}</td>
          </tr>
          <tr class="bg-white border-4 border-gray-200">
            <td class="text-center">## 見出し2</td>
            <td class="text-right"> {sumOfH2Title(text)}</td>
          </tr>
          <tr class="bg-white border-4 border-gray-200">
            <td class="text-center">### 見出し3</td>
            <td class="text-right"> {sumOfH3Title(text)}</td>
          </tr>
          <tr class="bg-white border-4 border-gray-200">
            <td class="text-center">#### 見出し4</td>
            <td class="text-right"> {sumOfH4Title(text)}</td>
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
