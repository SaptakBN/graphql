import mongoose, { HydratedDocument, Types } from 'mongoose';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CommentInterface } from './comment.interface';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment implements Partial<CommentInterface> {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  postId: Types.ObjectId;

  @Prop({ required: true, default: 0 })
  likes: number;

  @Prop({ required: true, default: 0 })
  dislikes: number;
}

const CommentSchema = SchemaFactory.createForClass(Comment);

export const CommentRepository = MongooseModule.forFeature([
  { name: Comment.name, schema: CommentSchema },
]);
