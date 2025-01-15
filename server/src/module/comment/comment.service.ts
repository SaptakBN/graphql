import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Comment } from '@/module/comment/schema/comment.schema';
import { InjectModel } from '@nestjs/mongoose';
import { GraphQLError } from 'graphql';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}

  async findOneById(id: Types.ObjectId) {
    const foundComment = await this.commentModel.findById(id);

    if (!foundComment) {
      throw new GraphQLError('Comment not found', {
        extensions: { code: 404, type: 'NOT_FOUND' },
      });
    }
    return foundComment;
  }
}
