import { Module } from '@nestjs/common';
import { CommentRepository } from '@/module/comment/schema/comment.schema';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';

@Module({
  imports: [CommentRepository],
  providers: [CommentService, CommentResolver],
})
export class CommentModule {}
