import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterArg {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
