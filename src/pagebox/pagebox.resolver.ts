import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Context } from '@nestjs/graphql';
import { Logger, Inject } from '@nestjs/common';
// import { BoxService } from '../box/box.service';
// import { BoxEntity } from '../box/box.entity';
// import { AuthGuard } from 'src/shared/auth.guard';
// import { GqlAuthGuard } from '../auth/gqlauth.guard';
// import { UserRO } from '../user/user.dto';
// import { BoxRQ } from '../box/box.dto';
import { ClientProxyFactory, ClientProxy, Transport } from '@nestjs/microservices';

@Resolver()
export class PageBoxResolver {
  private logger = new Logger('PageBoxResolver');
  // boxMicroservice: ClientProxy;

  constructor(
   @Inject('BoxMicroservice') private readonly boxMicroservice: ClientProxy,
  ) {
    //  this.boxMicroservice.connect();
    // this.boxMicroservice = ClientProxyFactory.create({
    //   transport: Transport.TCP,
    //   options: { host: 'localhost', port: 8877 },
    // });

  }

  // async onApplicationBootstrap() {
  //   this.logger.verbose(`onApplicationBootstrap boxes:`);
  //   await this.boxMicroservice.connect();
  // }

  @Query()
  async boxes(@Args('page') page: number) {
    this.logger.verbose(`Query boxes: ${JSON.stringify(this.boxMicroservice.send<string[]>('LIST_BOX', []))}`);
    this.boxMicroservice.send<string[]>('LIST_BOX', [])
    .subscribe({
      next: boxes => {
        this.logger.verbose(`boxMicroservice.send boxes: ${boxes}`);
        // res.status(HttpStatus.OK).json(users);
      },
      error: error => {
        // res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
      },
    });

    return this.boxMicroservice.send<string[]>('LIST_BOX', []);
  }

  // @Query()
  // async box(@Args('id') id: string): Promise<BoxEntity> {
  //   return await this.boxService.read(id);
  // }

  // @Mutation()
  // @UseGuards(new AuthGuard())
  // createBox(
  //   @Args('name') name: string,
  //   @Args('psrObjectsIds') psrObjectsIds: string[],
  // ) {
  //   const data = {name, psrObjectsIds};
  //   return this.boxService.create(data);
  // }
}
