import { useState, useContext } from "react";
import marked from "marked";
import { darkModeContext } from "./Layout";

export default function MarkDown() {
  const darkMode = useContext(darkModeContext);
  const [markdownText, setMarkDownText] = useState("");
  const [html, setHtml] = useState("");
  const updateMarkdown = (event) => {
    setMarkDownText(event.target.value);
    setHtml(marked(event.target.value));
    return setHtml(marked(event.target.value));
  };
  const resetTexts = () => {
    setMarkDownText("");
    setHtml("");
  };
  console.log(darkMode);
  return (
    <>
      <div className="w-full flex px-2 pt-2 justify-around h-screen">
        <div className="w-5/12">
          <h2
            className={
              "text-lg mb-2 " + (darkMode ? "text-white " : "text-grey-300")
            }
          >
            Markdown変換前
          </h2>
          <textarea
            className={"w-full h-3/4 p-3 outline-none"}
            onChange={(e) => updateMarkdown(e)}
            value={markdownText}
            placeholder="# 見出し
            ## 見出し2
            ### 見出し3
            #### 見出し4"
          />
          <button
            onClick={() => resetTexts()}
            disabled={markdownText === ""}
            className={
              "mt-3 px-3 py-2 text-white rounded-md " +
              (darkMode ? "bg-blue-800" : "bg-blue-500")
            }
          >
            リセット
          </button>
        </div>
        <div className="w-5/12">
          <h2
            className={
              "text-lg mb-2 " + (darkMode ? "text-white " : "text-grey-300")
            }
          >
            HTML変換後
          </h2>
          <div
            className="bg-white h-3/4 p-3 overflow-y-scroll"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
