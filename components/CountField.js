import { useState, useContext } from "react";
import { countTexts, countOnlyCode, sumOfAllTitles } from "../lib/wordCounts";
import { darkModeContext } from "./Layout";
import CountTable from "./CountTable";
import CountRules from "./CountRules";

export default function CountField({ text }) {
  const darkMode = useContext(darkModeContext);
  const [price, setPrice] = useState(0);
  const [codePrice, setCodePrice] = useState(0);
  const [checkBox, setCheckBox] = useState(false);

  return (
    <div className="w-full p-3">
      <h2
        className={"md:text-lg " + (darkMode ? "text-white " : "text-grey-300")}
      >
        集計欄
      </h2>
      <CountTable
        darkMode={darkMode}
        checkBox={checkBox}
        text={text}
        price={price}
        setPrice={setPrice}
        codePrice={codePrice}
        setCodePrice={setCodePrice}
        setCheckBox={setCheckBox}
      />
      <CountRules darkMode={darkMode} />
    </div>
  );
}
