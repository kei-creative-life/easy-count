import { useState, useContext } from "react";
import InputContext from "../contexts/InputContext";

export default function CountField() {
  const [text, setText] = useContext(InputContext);
  const [num, setNum] = useContext(InputContext);
  const [price, setPrice] = useState(0);

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
        <span>合計金額：</span>
        {text * price}
        <span>円</span>
      </div>
    </div>
  );
}
