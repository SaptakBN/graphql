import { Field, HideField, ObjectType } from '@nestjs/graphql';
import { UserInterface } from '../schema/user.interface';
import { Types } from 'mongoose';

@ObjectType()
export class UserModel implements UserInterface {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field()
  name: string;

  @Field()
  username: string;

  @HideField()
  password: string;
}
