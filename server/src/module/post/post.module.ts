import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from '@/module/post/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from '@/module/post/schema/post.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
