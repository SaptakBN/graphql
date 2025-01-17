import { UserModel } from '@/module/user/model/user.model';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { RegisterArg } from './args/register.arg';
import { LoginArg } from './args/login.arg';
import { LoginResponse } from './model/login-response.model';

@Resolver(() => UserModel)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => UserModel)
  async register(
    @Args('registerArg') registerArg: RegisterArg,
  ): Promise<UserModel> {
    return this.authService.register(registerArg);
  }

  @Mutation(() => LoginResponse)
  async login(@Args('loginArg') loginArg: LoginArg): Promise<LoginResponse> {
    return this.authService.login(loginArg);
  }
}
