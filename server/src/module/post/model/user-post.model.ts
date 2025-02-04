import { Field, ObjectType } from '@nestjs/graphql';
import { PostModel } from './post.model';
import { UserModel } from '@/module/user/model/user.model';

@ObjectType()
export class UserPostModel extends PostModel {
  @Field(() => UserModel)
  user: UserModel;
}
