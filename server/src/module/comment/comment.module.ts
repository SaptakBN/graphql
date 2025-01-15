import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from '@/module/comment/schema/comment.schema';
import { CommentService } from './comment.service';
import { CommentResolver } from './schema/comment.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  ],
  providers: [CommentService, CommentResolver],
})
export class CommentModule {}
