import { useState, useContext } from "react";
import InputContext from "../contexts/InputContext";

export default function CountField({ text }) {
  const [num, setNum] = useContext(InputContext);
  const [codeNum, setCodeNum] = useState(0);
  const [price, setPrice] = useState(0);
  const [codePrice, setCodePrice] = useState(0);

  const countTexts = (t) => {
    let textResult = t.replace(/[ +\t]+/gm, "");
    let removeNewLine = textResult
      .replace(/\r?\n/g, "")
      .replace(/``\w+|```/gm, "")
      .replace(/#+/, "");
    console.log(removeNewLine);
    console.log(removeNewLine.length);
    return removeNewLine.length;
  };

  const countCode = (t) => {
    let codeArray = t.match(/^```\w*\n.*\n(.*\n)*```$/gm);
    if (codeArray) {
      let removeOthersForCode = codeArray.map((value) => {
        return value.replace(/(```\w+|```)/gm, "").replace(/\n/gm, "");
      });
      return removeOthersForCode[0].length;
    } else {
      return 0;
    }
  };

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
    }
  };

  return (
    <div className="w-full p-3">
      <h2>集計欄</h2>
      <div>
        <span>文字数(文字のみ)：</span>
        {countTexts(text)}
      </div>
      <div>
        <span>文字数(コードのみ)：</span>
        {countCode(text)}
      </div>
      <div>
        <label htmlFor="unit-price">文字単価：</label>
        <input
          id="unit-price"
          type="number"
          placeholder="〇〇円/文字"
          onChange={(e) => setPrice(e.target.value)}
        />
        <span>円/文字</span>
      </div>
      <div>
        <label htmlFor="unit-price">文字単価(コード)：</label>
        <input
          id="unit-code-price"
          type="number"
          placeholder="〇〇円/文字"
          onChange={(e) => setCodePrice(e.target.value)}
        />
        <span>円/文字</span>
      </div>
      <div>
        <span>合計金額(文字のみ)：</span>
        {countTexts(text) * price}
        <span>円</span>
      </div>
      <div>
        <span>合計金額(コードのみ)：</span>
        {codePrice && countCode(text) ? countCode(text) * codePrice : 0}
        <span>円</span>
      </div>
      <div>
        <span>合計金額：</span>
        {countTexts(text) * price + countCode(text) * codePrice}
        <span>円</span>
      </div>
      <div>
        <div>
          <span># 見出し1：</span>
          {sumOfH1Title(text)}
        </div>
        <div>
          <span>## 見出し2：</span>
          {sumOfH2Title(text)}
        </div>
        <div>
          <span>### 見出し3：</span>
          {sumOfH3Title(text)}
        </div>
        <div>
          <span>#### 見出し4：</span>
          {sumOfH4Title(text)}
        </div>
      </div>
    </div>
  );
}
