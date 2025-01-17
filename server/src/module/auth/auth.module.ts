import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './resolver/auth.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.stretegy';
import * as bcrypt from 'bcryptjs';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;

          schema.pre<User>('save', async function (next) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;

            next();
          });

          schema.methods.comparePasswords = async function (
            submittedPassword: string,
          ) {
            await bcrypt.compare(submittedPassword, this.password);
          };

          return schema;
        },
      },
    ]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService) => ({
        secret: configService.getOrThrow('JWT_SECRET'),
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthModule {}
