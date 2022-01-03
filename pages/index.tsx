import type { NextPage } from "next";
import Head from "next/head";

import { PostListContainer } from "components/PostListContainer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="max-w-3xl mx-auto px-4 pt-2 my-6">
        <h2 className="text-gray-900 text-4xl font-bold tracking-tight mb-6">最新のナレッジ</h2>
        <PostListContainer />
      </div>
    </>
  );
};

export default Home;
