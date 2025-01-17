import { Types } from 'mongoose';

export interface UserInterface {
  _id: Types.ObjectId;
  name: string;
  username: string;
  password: string;
}
