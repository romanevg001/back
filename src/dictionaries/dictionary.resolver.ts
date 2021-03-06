import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/shared/auth.guard';
import { DictionaryService } from './dictionary.service';
import { IdeaDTO } from '../idea/idea.dto';

@Resolver('Dictionary')
export class DictionaryResolver {
  constructor(
    private dictionaryService: DictionaryService,
  ) {

  }

  @Query()
  async regions() {
    return await this.dictionaryService.readRegions();
  }

  @Query()
  async departments() {
    return await this.dictionaryService.readDepartments();
  }

  // @Query()
  // async idea(@Args('id') id: string) {
  //   return await this.ideaService.read(id);
  // }

  // @Mutation()
  // @UseGuards(new AuthGuard())
  // async createIdea(
  //   @Args('idea') idea: string,
  //   @Args('description') description: string,
  //   @Context('user') user,
  // ) {
  //   const data: IdeaDTO = {idea, description};
  //   const {id: userId} = user;
  //   return await this.ideaService.create(userId, data);
  // }

  // @Mutation()
  // @UseGuards(new AuthGuard())
  // async updateIdea(
  //   @Args('id') id: string,
  //   @Args('idea') idea: string,
  //   @Args('description') description: string,
  //   @Context('user') user,
  // ) {
  //   const data: IdeaDTO = {idea, description};
  //   const {id: userId} = user;
  //   return await this.ideaService.update(id, userId, data);
  // }

  // @Mutation()
  // @UseGuards(new AuthGuard())
  // async deleteIdea(
  //   @Args('id') id: string,
  // ) {
  //   return await this.ideaService.destroy(id);
  // }

  // @Mutation()
  // @UseGuards(new AuthGuard())
  // async upvote(
  //   @Args('id') id: string,
  //   @Context('user') user,
  // ) {
  //   const {id: userId} = user;
  //   return await this.ideaService.upvote(id, userId);
  // }

  // @Mutation()
  // @UseGuards(new AuthGuard())
  // async downvote(
  //   @Args('id') id: string,
  //   @Context('user') user,
  // ) {
  //   const {id: userId} = user;
  //   return await this.ideaService.downvote(id, userId);
  // }

  // @Mutation()
  // @UseGuards(new AuthGuard())
  // async bookmark(
  //   @Args('id') id: string,
  //   @Context('user') user,
  // ) {
  //   const {id: userId} = user;
  //   return await this.ideaService.bookmark(id, userId);
  // }

  // @Mutation()
  // @UseGuards(new AuthGuard())
  // async unbookmark(
  //   @Args('id') id: string,
  //   @Context('user') user,
  // ) {
  //   const {id: userId} = user;
  //   return await this.ideaService.unbookmark(id, userId);
  // }

  // @ResolveProperty()
  // comments(@Parent() idea) {
  //   const {id} = idea;
  //   return this.commentService.showByIdea(id);
  // }
}
