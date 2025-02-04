import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsString } from 'class-validator';

@InputType()
export class PostArg {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  title: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  content: string;
}
