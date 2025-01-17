import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../user/schema/user.schema';
import { Model } from 'mongoose';
import { RegisterArg } from './args/register.arg';
import { LoginArg } from './args/login.arg';
import { GraphQLError } from 'graphql';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from './model/login-response.model';
import { UserModel } from '../user/model/user.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerArg: RegisterArg): Promise<UserModel> {
    const userExist = await this.userModel.findOne({
      email: registerArg.email,
    });

    if (userExist) {
      throw new GraphQLError('User already exist', {
        extensions: { code: 400, type: 'BAD_REQUEST' },
      });
    }
    const user = await this.userModel.create(registerArg);

    return user;
  }

  async login(loginArg: LoginArg): Promise<LoginResponse> {
    const user = await this.userModel.findOne({ email: loginArg.email });
    if (!user) {
      throw new GraphQLError('User not found', {
        extensions: { code: 404, type: 'NOT_FOUND' },
      });
    }
    const isMatched = await (user as UserDocument).comparePasswords(
      loginArg.password,
    );

    if (!isMatched) {
      throw new GraphQLError('Invalid credentials', {
        extensions: { code: 401, type: 'UNAUTHORIZED' },
      });
    }

    const token = this.jwtService.sign({
      id: user._id,
      email: user.email,
    });

    const response: LoginResponse = { ...user.toObject(), token };

    return response;
  }
}
