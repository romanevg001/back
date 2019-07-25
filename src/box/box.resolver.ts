import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { BoxService } from './box.service';
import { TagService } from 'src/tag/tag.service';
import { AuthGuard } from 'src/shared/auth.guard';

@Resolver('Box')
export class BoxResolver {
  constructor(
    private boxService: BoxService,
  //  private tagService: TagService,
  ) {

  }

  @Query()
  async boxes(@Args('page') page: number) {
    return await this.boxService.readList(page);
  }

  @Query()
  async box(@Args('id') id: string) {
    return await this.boxService.read(id);
  }


  // @ResolveProperty()
  // tags(@Parent() psrobject) {
  //   const {id} = psrobject;
  //   console.log('psrobject ===> ',psrobject);
  //   return this.tagService.getByPsrObject(id);
  // }
}
