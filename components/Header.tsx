import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export const Header: React.VFC = () => {
  const { data: session, status } = useSession();
  return (
    <header className="flex flex-wrap items-center justify-between mb-8 px-3 h-16 border-b-2 border-gray-200">
      <div className="flex flex-shrink-0 items-center mr-6">
        <Link href="/">
          <a className="text-xl font-semibold">next-mvp</a>
        </Link>
      </div>
      {status !== "loading" ? (
        <div>
          {!session ? (
            <div className="flex items-center">
              <button
                onClick={() => signIn("google")}
                className="flex items-center justify-center ml-5 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 bg-gray-800 rounded shadow-sm"
              >
                新規登録 / ログイン
              </button>
            </div>
          ) : (
            <div className="flex items-center">
              <p>{session.user?.name}</p>
              <button
                onClick={() => signOut()}
                className="flex items-center justify-center ml-5 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 bg-gray-800 rounded shadow-sm"
              >
                ログアウト
              </button>
            </div>
          )}
        </div>
      ) : null}
    </header>
  );
};
