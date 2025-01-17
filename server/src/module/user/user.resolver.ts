import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserModel } from './model/user.model';
import { UserService } from './user.service';
import { Types } from 'mongoose';
import {
  CurrentUser,
  CurrentUserType,
} from '@/module/auth/decorator/curr-user.decorator';
import { JwtAuthGuard } from '@/module/auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserModel)
  async user(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.userService.findOneById(id);
  }

  @Query(() => UserModel)
  @UseGuards(JwtAuthGuard)
  async me(@CurrentUser() user: CurrentUserType) {
    return user;
  }

  @Query(() => [UserModel])
  async users() {
    return this.userService.find();
  }
}
