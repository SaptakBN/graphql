import { Field, ObjectType } from '@nestjs/graphql';
import { UserModel } from '@/module/user/model/user.model';

@ObjectType()
export class LoginResponse extends UserModel {
  @Field(() => String)
  token: string;
}
