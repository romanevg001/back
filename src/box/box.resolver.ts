import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { BoxService } from './box.service';
import { BoxEntity } from './box.entity';
import { AuthGuard } from 'src/shared/auth.guard';

@Resolver(of => BoxEntity)
export class BoxResolver {
  constructor(
    private readonly boxService: BoxService,
  ) {

  }

  @Query(returns => [BoxEntity])
  async boxes(@Args('page') page: number): Promise<BoxEntity[]> {
    return await this.boxService.readList(page);
  }

  @Query(returns => BoxEntity)
  async box(@Args('id') id: string): Promise<BoxEntity> {
    return await this.boxService.read(id);
  }

}
