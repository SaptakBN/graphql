import { UserModel } from '@/module/user/model/user.model';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '../auth.service';
import { RegisterArg } from '../args/register.arg';
import { LoginArg } from '../args/login.arg';

@Resolver(() => UserModel)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => UserModel)
  async register(@Args('email') registerArg: RegisterArg) {
    return this.authService.register(registerArg);
  }

  @Mutation(() => UserModel)
  async login(@Args('email') loginArg: LoginArg) {
    return this.authService.login(loginArg);
  }
}
