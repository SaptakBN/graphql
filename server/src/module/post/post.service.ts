import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Post } from '@/module/post/schema/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { GraphQLError } from 'graphql';
import { PostArg } from './args/post-args';
import { UserService } from '../user/user.service';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    private userService: UserService,
  ) {}

  async findOneById(id: Types.ObjectId): Promise<Post> {
    const foundPost = await this.postModel.findById(id);

    if (!foundPost) {
      throw new GraphQLError('Post not found', {
        extensions: { code: 404, type: 'NOT_FOUND' },
      });
    }
    return foundPost;
  }

  async findAll() {
    const posts = await this.postModel.find().populate('userId');

    return posts.map((post) => ({
      ...post.toObject(),
      userId: post.userId._id.toString(),
      user: post.userId,
    }));
  }

  async create(postArg: PostArg, userId: Types.ObjectId) {
    const user = await this.userService.findOneById(userId);
    const createdPost = await this.postModel.create({
      ...postArg,
      userId: user._id,
    });

    return { ...createdPost.toObject(), user };
  }
}
