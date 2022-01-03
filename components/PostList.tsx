import Link from "next/link";
import { Prisma, Post } from "@prisma/client";
import { getAllPost } from "libs/api";

type PostsWithUser = Prisma.PromiseReturnType<typeof getAllPost>;

type Props = {
  posts: PostsWithUser;
};

export const PostList: React.VFC<Props> = ({ posts }) => {
  return (
    <div className="grid gap-2 grid-cols-1 grid-cols-3">
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a className="shadow-sd block mb-6 p-6 hover:bg-gray-100 bg-white border border-gray-200 rounded lg:mb-0">
              <h3 className="mb-6 text-xl font-bold">{post.title}</h3>
              <div className="flex items-center">
                <img
                  src={String(post.user?.image)}
                  className="mr-3 w-8 h-8 rounded-full"
                  alt="ユーザーイメージ"
                />
                <span>{post.user?.name}</span>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};
