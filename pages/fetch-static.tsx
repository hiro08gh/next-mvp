import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Post } from "@prisma/client";
import { prisma } from "libs/prisma";
import styles from "styles/Home.module.css";
import Router from "next/router";
import { useSession, getSession } from "next-auth/react";

type props = {
  posts: Post[];
};

const FetchStatic: NextPage<props> = ({ posts }) => {
  const { data: session, status } = useSession();
  // 認証状態を取得するまでローディングを表示
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // 非認証状態なので "/" にリダイレクト
  if (status === "unauthenticated") {
    Router.push("/");
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>getServerSideProps で取得するページ</title>
      </Head>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await prisma.post.findMany();
  return { props: { posts } };
};

export default FetchStatic;
