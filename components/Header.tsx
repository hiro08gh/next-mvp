import Link from "next/link";

export const Header: React.VFC = () => {
  return (
    <header className="flex flex-wrap items-center justify-between mb-8 px-3 h-16 border-b-2 border-gray-200">
      <div className="flex flex-shrink-0 items-center mr-6">
        <Link href="/">
          <a className="text-xl font-semibold">next-mvp</a>
        </Link>
      </div>
        <div>
          <div className="flex items-center">
            <button
              className="flex items-center justify-center ml-5 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 bg-gray-800 rounded shadow-sm"
            >
              新規登録 / ログイン
            </button>
          </div>
        </div>
    </header>
  );
};
