import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "Let's count!!" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono text-base">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-white w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-grey-300 hover:bg-gray-700 px-3 py-2 rounded">
                  ホーム
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="text-grey-300 hover:bg-gray-700 px-3 py-2 rounded">
                  マークダウン
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="text-grey-300 hover:bg-gray-700 px-3 py-2 rounded">
                  お問い合わせ
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="bg-gray-100 flex flex-1 justify-center w-screen px-2">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center">
        <p>文字数カウント</p>
      </footer>
    </div>
  );
}
