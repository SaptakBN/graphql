import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PostModel } from './model/post.model';
import { PostService } from './post.service';
import { Types } from 'mongoose';
import { PostArg } from './args/post-args';
import {
  CurrentUser,
  CurrentUserType,
} from '../auth/decorator/curr-user.decorator';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Resolver(() => PostModel)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => PostModel)
  async post(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.postService.findOneById(id);
  }

  @Query(() => [PostModel])
  async posts() {
    return this.postService.findAll();
  }

  @Mutation(() => PostModel)
  async createPost(
    @Args('postArg') postArg: PostArg,
    @CurrentUser() user: CurrentUserType,
  ) {
    console.log({ user });
    return this.postService.create(postArg, user.id);
  }
}
