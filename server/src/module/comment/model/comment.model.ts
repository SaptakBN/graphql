import { Field, ObjectType } from '@nestjs/graphql';
import { CommentInterface } from '../schema/comment.interface';
import { Types } from 'mongoose';

@ObjectType()
export class CommentModel implements CommentInterface {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field()
  content: string;

  @Field(() => String)
  postId: Types.ObjectId;

  @Field(() => String)
  userId: Types.ObjectId;

  @Field(() => Number)
  likes: number;

  @Field(() => Number)
  dislikes: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
