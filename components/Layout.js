import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export const darkModeContext = React.createContext();

export default function Layout({ children, title = "Let's count!!" }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono text-base">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="w-full">
        <nav className={"w-full " + (darkMode ? "bg-gray-700" : "bg-white")}>
          <div className="flex items-center w-full h-14">
            <div className="flex space-x-4 px-2">
              <Link href="/">
                <a
                  className={
                    "px-3 py-2 rounded " +
                    (darkMode
                      ? "hover:bg-gray-500 text-white"
                      : "hover:bg-gray-200 text-grey-300")
                  }
                >
                  ホーム
                </a>
              </Link>
              <Link href="/markdown-page">
                <a
                  className={
                    "hover:bg-gray-200 px-3 py-2 rounded " +
                    (darkMode
                      ? "hover:bg-gray-500 text-white"
                      : "hover:bg-gray-200 text-grey-300")
                  }
                >
                  Markdown記法
                </a>
              </Link>
            </div>
            {/* ダークモード切り替え */}
            <div className="flex ml-auto px-5">
              {(() => {
                if (!darkMode) {
                  return (
                    <div className="flex items-center">
                      <label
                        htmlFor="unchecked"
                        className=" inline-flex items-center cursor-pointer"
                      >
                        <span className="relative">
                          <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
                          <span className="absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out">
                            <input
                              id="unchecked"
                              type="checkbox"
                              className="absolute opacity-0 w-0 h-0"
                              onChange={(e) => setDarkMode(e.target.checked)}
                            />
                          </span>
                        </span>
                        <span className="ml-3 text-sm">ダークモード</span>
                      </label>
                      <span className="pl-2 pb-1">
                        <svg
                          className="w-8 h-8"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </span>
                    </div>
                  );
                } else {
                  return (
                    <div className="flex items-center">
                      <label
                        htmlFor="checked"
                        className="inline-flex items-center cursor-pointer"
                      >
                        <span className="relative">
                          <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
                          <span className="absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-purple-600 transform translate-x-full">
                            <input
                              id="checked"
                              type="checkbox"
                              className="absolute opacity-0 w-0 h-0"
                              onChange={(e) => setDarkMode(e.target.checked)}
                            />
                          </span>
                        </span>
                        <span className="ml-3 text-sm text-white">
                          通常モード
                        </span>
                      </label>
                      <span className="pl-2 pb-1">
                        <svg
                          className="w-8 h-8 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                      </span>
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </nav>
      </header>

      <main
        className={
          "flex flex-1 justify-center px-2 w-full " +
          (darkMode ? "bg-gray-800" : "bg-gray-100")
        }
      >
        <darkModeContext.Provider value={darkMode}>
          {children}
        </darkModeContext.Provider>
      </main>

      <footer
        className={
          "w-full h-12 flex justify-center items-center " +
          (darkMode ? "bg-gray-700 text-white" : "bg-white")
        }
      >
        <p>Created By Kengo Yamamoto on 2021</p>
      </footer>
    </div>
  );
}
