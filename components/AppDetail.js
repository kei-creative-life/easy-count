export default function AppDetail({ darkMode }) {
  return (
    <>
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
    </>
  );
}
