import { Resolver, Query, Args } from '@nestjs/graphql';
import { PostModel } from './post.model';
import { PostService } from '../post.service';
import { Types } from 'mongoose';

@Resolver(() => PostModel)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => PostModel)
  async author(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.postService.findOneById(id);
  }
}
