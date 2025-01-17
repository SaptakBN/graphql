import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/schema/user.schema';
import { Model } from 'mongoose';
import { RegisterArg } from './args/register.arg';
import { LoginArg } from './args/login.arg';
import { GraphQLError } from 'graphql';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async register(registerArg: RegisterArg) {
    const userExist = await this.userModel.findOne({
      email: registerArg.email,
    });

    if (userExist) {
      throw new GraphQLError('User already exist', {
        extensions: { code: 400, type: 'BAD_REQUEST' },
      });
    }
    const user = await this.userModel.create(registerArg);
    console.log({ user });

    if (!user) {
      throw new GraphQLError('User not created', {
        extensions: {
          code: 500,
          type: 'SERVER_ERROR',
        },
      });
    }
    console.log({ user });
    return user;
  }

  async login(loginArg: LoginArg) {
    const user = await this.userModel.findOne(loginArg);
    return user;
  }
}
