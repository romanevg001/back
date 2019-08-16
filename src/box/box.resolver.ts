import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { BoxService } from './box.service';
import { BoxEntity } from './box.entity';
import { AuthGuard } from 'src/shared/auth.guard';
import { GqlAuthGuard } from '../auth/gqlauth.guard';

@Resolver()
export class BoxResolver {
  constructor(
    private readonly boxService: BoxService,
  ) {

  }

  @Query()
  @UseGuards(new GqlAuthGuard())
  async boxes(@Args('page') page: number): Promise<BoxEntity[]> {
    return await this.boxService.readList(page);
  }

  @Query()
  async box(@Args('id') id: string): Promise<BoxEntity> {
    return await this.boxService.read(id);
  }

}
