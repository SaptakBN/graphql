import { Module } from '@nestjs/common';
import { CommentController } from '@/module/comment/comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from '@/module/comment/schema/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }]),
  ],
  controllers: [CommentController],
})
export class CommentModule {}
