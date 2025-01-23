import { Module, ModuleMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.stretegy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';

const metadata: ModuleMetadata = {
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService) => ({
        secret: configService.getOrThrow('JWT_SECRET'),
      }),
    }),
    UserModule,
    PassportModule,
  ],
  providers: [
    AuthService,
    AuthResolver,
    JwtStrategy,
    UserService,
    LocalStrategy,
  ],
  exports: [JwtStrategy, JwtModule, PassportModule, LocalStrategy],
};

@Module(metadata)
export class AuthModule {}
