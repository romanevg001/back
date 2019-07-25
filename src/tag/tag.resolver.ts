import { Resolver, Query, Args } from '@nestjs/graphql';
import { TagService } from 'src/tag/tag.service';

@Resolver('Tag')
export class TagResolver {
  constructor(
    private tagService: TagService,
  ) {

  }

  @Query()
  async tags(@Args('page') page: number) {
    return await this.tagService.readList(page);
  }

  @Query()
  async tag(@Args('id') id: string) {
    return await this.tagService.read(id);
  }

}
