import { Types } from 'mongoose';

export interface UserInterface {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
}
