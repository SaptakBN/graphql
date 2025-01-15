import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/schema/user.schema';
import { Model } from 'mongoose';
import { RegisterArg } from './args/register.arg';
import { LoginArg } from './args/login.arg';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async register(registerArg: RegisterArg) {
    const user = await this.userModel.create(registerArg);
    return user;
  }

  async login(loginArg: LoginArg) {
    const user = await this.userModel.findOne(loginArg);
    return user;
  }
}
