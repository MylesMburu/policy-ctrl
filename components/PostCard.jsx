// components/PostCard.js
import { formatDistanceToNow } from 'date-fns'; 
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function PostCard({ post, onDelete, onUpdate }) {
  return (
    <div className="border rounded-lg p-4 my-2 bg-white shadow-sm text-black">
      <div className="flex items-center space-x-2 mb-4">
        <div className="rounded-full h-8 w-8 bg-gray-200 flex justify-center items-center overflow-hidden">
          {/* Placeholder for user avatar */}
          <span className="text-sm">{post.creator.username.charAt(0).toUpperCase()}</span>
        </div>
        <div>
          <p className="font-bold">{post.creator.username}</p>
          <p className="text-xs text-gray-500">
            {formatDistanceToNow(new Date(post.createdAt))} ago • {post.topicTag}
          </p>
        </div>
      </div>
      <h3 className="font-bold mb-2">{post.title}</h3>
      <p>{post.content}</p>
      <div className="flex justify-between items-center mt-4">
        {/* Conditional rendering based on user's ability to edit/delete */}
        <div className='flex gap-4'>
          <button className="text-blue-500" onClick={() => onUpdate(post._id)}><MdEdit /></button>
          <button className="text-red-500 mr-2" onClick={() => onDelete(post._id)}><MdDelete /></button>
        </div>
        <button className="bg-blue-100 text-blue-500 px-2 py-1 rounded text-sm">Comment</button>
      </div>
    </div>
  );
}
