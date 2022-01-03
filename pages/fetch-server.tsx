import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { Post } from "@prisma/client";
import { prisma } from "libs/prisma";
import styles from "styles/Home.module.css";
import { getSession } from "next-auth/react";

type props = {
  posts: Post[];
};

const FetchServer: NextPage<props> = ({ posts }) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const posts = await prisma.post.findMany();

  return { props: { posts } };
};

export default FetchServer;
