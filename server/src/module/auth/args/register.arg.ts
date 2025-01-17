import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class RegisterArg {
  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  username: string;

  @Field(() => String)
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
