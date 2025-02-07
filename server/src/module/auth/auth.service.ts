import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../user/schema/user.schema';
import { RegisterArg } from './args/register.arg';
import { LoginArg } from './args/login.arg';
import { GraphQLError } from 'graphql';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from './model/login-response.model';
import { UserModel } from '../user/model/user.model';
import { UserService } from '../user/user.service';
import { Types } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(registerArg: RegisterArg): Promise<UserModel> {
    const userExist = await this.userService.findByUsername(
      registerArg.username,
    );

    if (userExist) {
      throw new GraphQLError('User already exist', {
        extensions: { code: 400, type: 'BAD_REQUEST' },
      });
    }
    const user = await this.userService.create(registerArg);

    return user;
  }

  async login(loginArg: LoginArg): Promise<LoginResponse> {
    const user = await this.userService.findByUsername(loginArg.username);
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
      username: user.username,
    });

    const response: LoginResponse = { ...user.toObject(), token };

    return response;
  }

  async validateUser({ username, password }: LoginArg): Promise<User> {
    const user = (await this.userService.findByUsername(
      username,
    )) as UserDocument;
    if (!user) {
      throw new GraphQLError('User not found', {
        extensions: { code: 404, type: 'NOT_FOUND' },
      });
    }
    const isMatched = await user.comparePasswords(password);

    if (!isMatched) {
      throw new GraphQLError('Invalid credentials');
    }

    return user;
  }

  async validateUserById(id: Types.ObjectId): Promise<User> {
    const user = (await this.userService.validateUser(id)) as UserDocument;
    return user;
  }
}
