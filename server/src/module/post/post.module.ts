import { Module } from '@nestjs/common';
import { PostService } from '@/module/post/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from '@/module/post/schema/post.schema';
import { PostResolver } from './resolver/post.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  providers: [PostService, PostResolver],
})
export class PostModule {}
