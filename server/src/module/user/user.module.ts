import { Module } from '@nestjs/common';
import { UserService } from '@/module/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@/module/user/schema/user.schema';
import { UserResolver } from './resolver/user.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService, UserResolver],
})
export class UserModule {}
