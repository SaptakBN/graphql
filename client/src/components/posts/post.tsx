import { UserPostModel } from "@/GraphQL/generated/graphql";
import { Ellipsis, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import { format } from "@/utils/date-format";

export function Post({ post }: { post: UserPostModel }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <div className="flex space-x-2">
          <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full cursor-pointer">
            <Ellipsis />
          </button>
        </div>
      </div>
      <div className="flex items-center text-gray-600 text-sm mb-2">
        <img alt="Avatar of User1" className="rounded-full mr-2" src="https://placehold.co/40x40" />
        <span>
          Posted by: <strong>{post.user?.username}</strong>
        </span>
        <span className="ml-4">{format(post.createdAt)}</span>
      </div>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <div className="flex justify-between items-center">
        <div className="flex ">
          <button className="flex items-center text-gray-600 hover:text-green-700  bg-green-100 rounded-s-full py-2 px-4">
            <ThumbsUp className="mr-2" size="1.2em" />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-red-500 bg-red-100 rounded-e-full py-2 px-4">
            <span>{post.dislikes}</span>
            <ThumbsDown className="ml-2" size="1.2em" />
          </button>
        </div>
        <button className="flex items-center text-gray-600 hover:text-green-500" onClick={() => {}}>
          <MessageSquare className="mr-1" />
          <span>0</span>
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
