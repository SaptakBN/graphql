import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginArg {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
