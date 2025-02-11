import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { PostInterface } from '../schema/post.interface';
import { Types } from 'mongoose';

@ObjectType()
export class PostModel implements PostInterface {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field()
  title: string;

  @Field()
  content: string;

  @HideField()
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
