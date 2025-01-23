import { Module } from '@nestjs/common';
import { PostService } from '@/module/post/post.service';
import { PostRepository } from '@/module/post/schema/post.schema';
import { PostResolver } from './post.resolver';

@Module({
  imports: [PostRepository],
  providers: [PostService, PostResolver],
})
export class PostModule {}
