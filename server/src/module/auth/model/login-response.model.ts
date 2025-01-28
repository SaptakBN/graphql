import { Field, ObjectType, OmitType } from '@nestjs/graphql';
import { UserModel } from '@/module/user/model/user.model';

@ObjectType()
export class LoginResponse extends OmitType(UserModel, ['password']) {
  @Field(() => String)
  token: string;
}
