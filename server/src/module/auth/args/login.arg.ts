import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsString } from 'class-validator';

@InputType()
export class LoginArg {
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
