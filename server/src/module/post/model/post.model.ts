import { Field, ObjectType } from '@nestjs/graphql';
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

  @Field(() => String)
  userId: Types.ObjectId;
}
