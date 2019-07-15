import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CommentDTO } from '../comment/comment.dto';
import { CommentService } from 'src/comment/comment.service';
import { AuthGuard } from 'src/shared/auth.guard';

@Resolver('comment')
export class CommentResolver {
  constructor(
    private userService: UserService,
    private commentService: CommentService,
  ) {
  }

  @Query()
  comment(@Args('id') id: string) {
    return this.commentService.show(id);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  createComment(
    @Args('idea') ideaId: string,
    @Args('comment') comment: string,
    @Context('user') user,
  ) {
    const data: CommentDTO = {comment};
    const {id: userId} = user;
    return this.commentService.create(ideaId, userId, data);
  }

}
