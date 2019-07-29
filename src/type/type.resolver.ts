import { Resolver, Query, Args } from '@nestjs/graphql';
import { TypeService } from 'src/type/type.service';

@Resolver('Type')
export class TypeResolver {
  constructor(
    private typeService: TypeService,
  ) {

  }

  @Query()
  async types() {
    return await this.typeService.getTypes();
  }

}
