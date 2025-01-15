import { HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { UserInterface } from './user.interface';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User implements UserInterface {
  @Prop({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ required: true })
  email: string;

  @Exclude()
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
