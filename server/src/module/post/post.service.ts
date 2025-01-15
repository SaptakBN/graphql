import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Post } from '@/module/post/schema/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { GraphQLError } from 'graphql';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async findOneById(id: Types.ObjectId) {
    const foundPost = await this.postModel.findById(id);

    if (!foundPost) {
      throw new GraphQLError('Post not found', {
        extensions: { code: 404, type: 'NOT_FOUND' },
      });
    }
    return foundPost;
  }
}
