import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CommentDTO } from '../comment/comment.dto';
import { CommentService } from 'src/comment/comment.service';
import { AuthGuard } from 'src/shared/auth.guard';

@Resolver('comment')
export class CommentResolver {
  constructor(
    private commentService: CommentService,
  ) {
  }

  @Query()
  async comment(@Args('id') id: string) {
    return await this.commentService.show(id);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async createComment(
    @Args('idea') ideaId: string,
    @Args('comment') comment: string,
    @Context('user') user,
  ) {
    const data: CommentDTO = {comment};
    const {id: userId} = user;
    return await this.commentService.create(ideaId, userId, data);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  async deleteComment(
    @Args('id') id: string,
    @Context('user') user,
  ) {
    const {id: userId} = user;
    return await this.commentService.destroy(id, userId);
  }

}
