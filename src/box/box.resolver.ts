import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { BoxService } from './box.service';
import { BoxEntity } from './box.entity';
import { AuthGuard } from 'src/shared/auth.guard';
import { GqlAuthGuard } from '../auth/gqlauth.guard';
import { UserRO } from '../user/user.dto';
import { BoxRQ } from './box.dto';

@Resolver()
export class BoxResolver {
  constructor(
    private readonly boxService: BoxService,
  ) {

  }

  @Query()
  async boxes(@Args('page') page: number): Promise<BoxEntity[]> {
    return await this.boxService.readList(page);
  }

  @Query()
  async box(@Args('id') id: string): Promise<BoxEntity> {
    return await this.boxService.read(id);
  }

  @Mutation()
  @UseGuards(new AuthGuard())
  createBox(
    @Args('name') name: string,
    @Args('psrObjectsIds') psrObjectsIds: string[],
  ) {
    const data = {name, psrObjectsIds};
    return this.boxService.create(data);
  }
}
