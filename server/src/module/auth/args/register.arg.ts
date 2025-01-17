import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MinLength } from 'class-validator';

@InputType()
export class RegisterArg {
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @MinLength(6)
  password: string;
}
