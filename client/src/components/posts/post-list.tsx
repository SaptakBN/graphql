import { PostModel, PostsDocument, PostsQuery, PostsQueryVariables } from "@/GraphQL/generated/graphql";
import { Loader, Post } from "@/components";
import { useQuery } from "@apollo/client";

export function PostList() {
  const { data, error, loading } = useQuery<PostsQuery, PostsQueryVariables>(PostsDocument);

  if (loading) return <Loader />;

  if (error || !data) return <>{error?.message}</>;

  return data.posts.map((post: Partial<PostModel>) => <Post post={post} />);
}
