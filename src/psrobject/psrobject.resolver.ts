import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PsrobjectService } from './psrobject.service';
import { PsrobjectDTO } from './psrobject.dto';
import { TagService } from 'src/tag/tag.service';
import { TypeService } from 'src/type/type.service';
import { DictionaryService } from 'src/dictionaries/dictionary.service';

@Resolver('Psrobject')
export class PsrobjectResolver {
  constructor(
    private psrobjectService: PsrobjectService,
    private tagService: TagService,
    private typeService: TypeService,
    private dictionaryService: DictionaryService,
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
