import { Types } from 'mongoose';

export interface PostInterface {
  _id: Types.ObjectId;
  title: string;
  content: string;
  userId: Types.ObjectId;
}
