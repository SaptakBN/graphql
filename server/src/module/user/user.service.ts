import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { User } from '@/module/user/schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { GraphQLError } from 'graphql';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOneById(id: Types.ObjectId) {
    const foundUser = await this.userModel.findById(id);

    if (!foundUser) {
      throw new GraphQLError('User not found', {
        extensions: { code: 404, type: 'NOT_FOUND' },
      });
    }
    return foundUser;
  }

  find() {
    return this.userModel.find();
  }

  async findByUsername(username: string) {
    const foundUser = await this.userModel.findOne({ username });
    return foundUser;
  }

  async create(user: User) {
    return this.userModel.create(user);
  }
}
