import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PostInterface } from './post.interface';

export type PostDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post implements PostInterface {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId;
}

export const PostSchema = SchemaFactory.createForClass(Post);
