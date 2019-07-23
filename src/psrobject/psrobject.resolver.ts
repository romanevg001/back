import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PsrobjectService } from './psrobject.service';
import { PsrobjectDTO } from './psrobject.dto';
import { TagService } from 'src/tag/tag.service';
import { AuthGuard } from 'src/shared/auth.guard';
import { async } from 'rxjs/internal/scheduler/async';

@Resolver('Psrobject')
export class PsrobjectResolver {
  constructor(
    private psrobjectService: PsrobjectService,
    private tagService: TagService,
  ) {

  }

  @Query()
  async psrobjects(@Args('page') page: number) {
    return await this.psrobjectService.getList(page);
  }

  @Query()
  psrobject(@Args('id') id: string) {
    return this.psrobjectService.read(id);
  }

  @ResolveProperty()
  tags(@Parent() psrobject) {
    const {id} = psrobject;
    console.log('psrobject ===> ',psrobject);
    return this.tagService.getTagsByPsrObject(id);
  }
}
