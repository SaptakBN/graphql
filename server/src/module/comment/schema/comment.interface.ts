import { Types } from 'mongoose';

export interface CommentInterface {
  _id: Types.ObjectId;
  content: string;
  userId: Types.ObjectId;
  postId: Types.ObjectId;
  likes: number;
  dislikes: number;
  createdAt: Date;
  updatedAt: Date;
}
