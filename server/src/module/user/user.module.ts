import { Module } from '@nestjs/common';
import { UserService } from '@/module/user/user.service';
import { UserRepository } from '@/module/user/schema/user.schema';
import { UserResolver } from './user.resolver';

@Module({
  imports: [UserRepository],
  providers: [UserService, UserResolver],
  exports: [UserService, UserRepository],
})
export class UserModule {}
