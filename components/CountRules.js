import {
  BACK_DARK_COLOR_RULES,
  BACK_DARK_MAIN_STYLES_RULES,
} from "../constant/Constant";

export default function CountRules({ darkMode }) {
  return (
    <>
      <h2
        className={"md:text-lg " + (darkMode ? "text-white " : "text-grey-300")}
      >
        文字数カウントのルール
      </h2>
      <div
        className={
          BACK_DARK_MAIN_STYLES_RULES +
          (darkMode ? BACK_DARK_COLOR_RULES : "bg-white")
        }
      >
        <p className={darkMode ? "text-blue-400" : "text-grey-300"}>
          「見出しの文字をカウントする」にチェックすると、見出しの文字のみカウントできます。(#や##はカウントされません。)
        </p>
        <div
          className={"p-4 mt-2 " + (darkMode ? "bg-gray-900" : "bg-gray-100")}
        >
          <p>例：## 見出し2 =&gt; 3文字としてカウント</p>
        </div>
      </div>
      <div
        className={
          BACK_DARK_MAIN_STYLES_RULES +
          (darkMode ? BACK_DARK_COLOR_RULES : "bg-white")
        }
      >
        <p className={darkMode ? "text-blue-400" : "text-grey-300"}>
          強調を表す「**」はカウントされません。
        </p>
        <div
          className={"p-4 mt-2 " + (darkMode ? "bg-gray-900" : "bg-gray-100")}
        >
          <p>例：**強調** =&gt; 2文字としてカウント</p>
        </div>
      </div>
      <div
        className={
          BACK_DARK_MAIN_STYLES_RULES +
          (darkMode ? BACK_DARK_COLOR_RULES : "bg-white")
        }
      >
        <p className={darkMode ? "text-blue-400" : "text-grey-300"}>
          「```」で囲まれたコードの部分のみカウントされます。
        </p>
        <div
          className={"p-4 mt-2 " + (darkMode ? "bg-gray-900" : "bg-gray-100")}
        >
          <p>
            例：```Ruby
            <br />
            &lt;h2&gt;Hello World&lt;h2&gt;
            <br />
            ```
          </p>
        </div>
      </div>
      <div
        className={
          BACK_DARK_MAIN_STYLES_RULES +
          (darkMode ? BACK_DARK_COLOR_RULES : "bg-white")
        }
      >
        <p className={darkMode ? "text-blue-400" : "text-grey-300"}>
          画像のマークダウンは文字数にカウントされません。
        </p>
        <div
          className={"p-4 mt-2 " + (darkMode ? "bg-gray-900" : "bg-gray-100")}
        >
          <p>例：![画像タイトル](https://画像URL)</p>
        </div>
      </div>
      <div
        className={
          BACK_DARK_MAIN_STYLES_RULES +
          (darkMode ? BACK_DARK_COLOR_RULES : "bg-white")
        }
      >
        <p className={darkMode ? "text-blue-400" : "text-grey-300"}>
          リンクのマークダウンは文字数にカウントされません。
        </p>
        <div
          className={"p-4 mt-2 " + (darkMode ? "bg-gray-900" : "bg-gray-100")}
        >
          <p>例：[リンクテキスト](https://URL)</p>
        </div>
      </div>
    </>
  );
}
