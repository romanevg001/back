import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Context } from '@nestjs/graphql';
import { UseGuards, UseFilters } from '@nestjs/common';
import { PsrobjectService } from './psrobject.service';
import { PsrobjectDTO } from './psrobject.dto';
import { TagService } from 'src/tag/tag.service';
import { TypeService } from 'src/type/type.service';
import { DictionaryService } from 'src/dictionaries/dictionary.service';
import { GqlAuthGuard } from '../auth/gqlauth.guard';
import { CurrentUser } from '../shared/user.decorator';
import { UserEntity } from '../user/user.entity';
import { GqlHttpExceptionFilter } from '../shared/gql-http-error.filter';

@Resolver('Psrobject')
@UseFilters(GqlHttpExceptionFilter)
export class PsrobjectResolver {
  constructor(
    private psrobjectService: PsrobjectService,
    private tagService: TagService,
    private typeService: TypeService,
    private dictionaryService: DictionaryService,
  ) {

  }

  @Query()
  @UseGuards(GqlAuthGuard)
  async psrobjects(
    @Args('page') page: number,
    @CurrentUser() user: UserEntity,
  ) {
    console.log('user ==> ', user);
    return await this.psrobjectService.getList(page);
  }




  @Query()
  psrobject(@Args('id') id: string) {
    return this.psrobjectService.read(id);
  }

  @ResolveProperty()
  tags(@Parent() psrobject) {
    const {id} = psrobject;
    return this.tagService.getTagsByPsrObject(id);
  }

  @ResolveProperty()
  type(@Parent() psrobject) {
    const {id} = psrobject;
    return this.typeService.getTypesByPsrObject(id);
  }

  @ResolveProperty()
  department(@Parent() psrobject) {
    const {id} = psrobject;
    return this.dictionaryService.getDepartmentByPsrObject(id);
  }

  @ResolveProperty()
  region(@Parent() psrobject) {
    const {id} = psrobject;
    return this.dictionaryService.getRegionByPsrObject(id);
  }
}
