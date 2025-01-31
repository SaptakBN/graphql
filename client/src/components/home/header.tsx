import { MeQuery } from "@/GraphQL/generated/graphql";

export const Header = ({ user }: { user: MeQuery["me"] }) => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">My CRUD App</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">
            <strong>{user.name}</strong>
          </span>
        </div>
      </div>
    </header>
  );
};
