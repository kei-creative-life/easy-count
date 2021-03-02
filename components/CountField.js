import { useState, useContext } from "react";
import InputContext from "../contexts/InputContext";

export default function CountField({ text }) {
  const [num, setNum] = useContext(InputContext);
  const [price, setPrice] = useState(0);
  const [codePrice, setCodePrice] = useState(0);
  const fixH2Title = (t) => {
    if (t.match(/^## .+$/gm)) {
      return t
        .replace(/^## /gm, "")
        .replace(/[ +　+]/gm, "")
        .replace(/\r?\n/gm, "").length;
      // if (t.match(/^.*### .+/gm)) {
      //   return t
      //     .replace(/(###+) .*/gm, "")
      //     .replace(/^## /gm, "")
      //     .replace(/[ +　+]/gm, "")
      //     .replace(/\r?\n/gm, "").length;
      // } else {
      // }
    }
  };
  const fixH3Title = (t) => {
    if (t.match(/^### .+/gm)) {
      return t
        .replace(/^### /gm, "")
        .replace(/[ +　+]/gm, "")
        .replace(/\r?\n/gm, "");
      // if (t.match(/^.*## .+$/gm)) {
      //   return t
      //     .replace(/^### /gm, "")
      //     .replace(/^.*## .+$/gm, "")
      //     .replace(/[ +　+]/gm, "")
      //     .replace(/\r?\n/gm, "");
      // } else {
      // }
    }
  };

  const countCode = (t) => {
    if (t.match(/^```\w+\n.+\n(.*\n)*```$/gm)) {
      return t
        .replace(/(```\w+|```)/gm, "")
        .replace(/[ +　+]/gm, "")
        .replace(/\r?\n/gm, "").length;
    }
  };

  return (
    <div className="w-full">
      <div>
        <span>文字数：</span>
        {num}
      </div>
      <div>
        <label htmlFor="unit-price">文字単価：</label>
        <input
          id="unit-price"
          type="number"
          placeholder="〇〇円/文字"
          onChange={(e) => setPrice(e.target.value)}
        />
        <span>円/1文字</span>
      </div>
      <div>
        <label htmlFor="unit-price">文字単価(コード)：</label>
        <input
          id="unit-code-price"
          type="number"
          placeholder="〇〇円/文字"
          onChange={(e) => setCodePrice(e.target.value)}
        />
        <span>円/1文字</span>
      </div>
      <div>
        <span>合計金額：</span>
        {num * price}
        <span>円</span>
      </div>
      <div>
        <span>コード文字数：</span>
        {countCode(text)}
      </div>
      <div>
        <div>
          <span># 見出し1：</span>
        </div>
        <div>
          <span>## 見出し2：</span>
          {fixH2Title(text)}
        </div>
        <div>
          <span>### 見出し3：</span>
          {fixH3Title(text)}
        </div>
        <div>
          <span>#### 見出し4：</span>
        </div>
      </div>
    </div>
  );
}
