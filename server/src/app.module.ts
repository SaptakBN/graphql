import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';
import { PostModule } from './module/post/post.module';
import { CommentService } from './module/comment/comment.service';
import { CommentModule } from './module/comment/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('DB_HOST')}:${configService.get(
          'DB_PORT',
        )}/${configService.get('DATABASE')}`,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    PostModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService, CommentService],
})
export class AppModule {}
