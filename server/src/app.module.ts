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
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb://${configService.getOrThrow('DB_HOST')}:${configService.getOrThrow('DB_PORT')}`,
        dbName: configService.getOrThrow('DATABASE'),
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'schema/schema.gql'),
      driver: ApolloDriver,
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
