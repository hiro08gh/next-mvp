import useSWR from "swr";
import { fetcher } from "utils/fetcher";
import { PostList } from "./PostList";

export const PostListContainer: React.VFC = () => {
  const { data, error } = useSWR("/api/posts", fetcher);

  if (error) return <div>Faild to fetch.</div>;
  if (!data) return <div>Loading...</div>;

  // 記事がない場合に表示
  if (data.length === 0) {
    return <div>記事がありません</div>;
  }

  return <PostList posts={data} />;
};
