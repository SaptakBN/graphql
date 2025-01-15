import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';
import { PostModule } from './module/post/post.module';
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
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema/schema.gql'),
      sortSchema: true,
    }),
    AuthModule,
    UserModule,
    PostModule,
    CommentModule,
  ],
  providers: [AppService, ConfigService],
})
export class AppModule {}
