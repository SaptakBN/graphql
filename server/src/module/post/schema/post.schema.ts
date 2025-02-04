import mongoose, { HydratedDocument, Types } from 'mongoose';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PostInterface } from './post.interface';

export type PostDocument = HydratedDocument<Post>;

@Schema({ timestamps: true })
export class Post implements Partial<PostInterface> {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: 0 })
  dislikes: number;
}

const PostSchema = SchemaFactory.createForClass(Post);

export const PostRepository = MongooseModule.forFeature([
  { name: Post.name, schema: PostSchema },
]);
