import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserModel } from '../model/user.model';
import { UserService } from '../user.service';
import { Types } from 'mongoose';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserModel)
  async user(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.userService.findOneById(id);
  }
}
