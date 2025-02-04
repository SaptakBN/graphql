import { PostModel } from "@/GraphQL/generated/graphql";

export function Post({ post }: { post: PostModel }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:underline">Edit</button>
          <button className="text-red-500 hover:underline">Delete</button>
        </div>
      </div>
      <div className="flex items-center text-gray-600 text-sm mb-2">
        <img alt="Avatar of User1" className="rounded-full mr-2" src="https://placehold.co/40x40" />
        <span>
          Posted by:
          <strong>User1</strong>
        </span>
        <span className="ml-4">{post.createdAt}</span>
      </div>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="flex items-center text-gray-600 hover:text-blue-500">
            <i className="fas fa-thumbs-up mr-1"></i>
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-red-500">
            <i className="fas fa-thumbs-down mr-1"></i>
            <span>{post.dislikes}</span>
          </button>
        </div>
        <button className="flex items-center text-gray-600 hover:text-green-500" onClick={() => {}}>
          <i className="fas fa-comments mr-1"></i>
          <span>Comments</span>
        </button>
      </div>
      <div className="mt-4 hidden" id="comments1">
        <div className="bg-gray-100 p-2 rounded">
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <img alt="Avatar of Commenter1" className="rounded-full mr-2" src="https://placehold.co/40x40" />
            <span>
              Comment by:
              <strong>Commenter1</strong>
            </span>
            <span className="ml-4">2023-10-01 12:30 PM</span>
          </div>
          <p className="text-gray-700 mb-2">Comment 1: This is a comment.</p>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <img alt="Avatar of Commenter2" className="rounded-full mr-2" src="https://placehold.co/40x40" />
            <span>
              Comment by:
              <strong>Commenter2</strong>
            </span>
            <span className="ml-4">2023-10-01 01:00 PM</span>
          </div>
          <p className="text-gray-700">Comment 2: This is another comment.</p>
        </div>
      </div>
    </div>
  );
}
