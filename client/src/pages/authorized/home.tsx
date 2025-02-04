import { useQuery } from "@apollo/client";
import { MeDocument, MeQuery, MeQueryVariables } from "@/GraphQL/generated/graphql";
import { Header, HomeInputs, PostList } from "@/components";

const Home = () => {
  const { data, error } = useQuery<MeQuery, MeQueryVariables>(MeDocument);

  if (error || !data) return <>{error?.message}</>;

  return (
    <main className="bg-gray-100 font-roboto h-screen">
      <Header user={data.me} />
      <main className="container mx-auto mt-6 px-4">
        <HomeInputs />
        <div className="space-y-4">
          <PostList />
        </div>
      </main>
    </main>
  );
};

export default Home;
