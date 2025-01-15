import { Resolver, Query, Args } from '@nestjs/graphql';
import { CommentModel } from '../model/comment.model';
import { CommentService } from '../comment.service';
import { Types } from 'mongoose';

@Resolver(() => CommentModel)
export class CommentResolver {
  constructor(private commentService: CommentService) {}

  @Query(() => CommentModel)
  async comment(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.commentService.findOneById(id);
  }
}
