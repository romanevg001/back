import { Controller, Get, Post, Param, Body, Redirect, Inject } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ClientProxyFactory, ClientProxy, Transport } from '@nestjs/microservices';

@Controller('api/box')
export class BoxController {

  constructor(
    @Inject('BoxMicroservice') private readonly boxMicroservice: ClientProxy,
  ) {
    // this.client = ClientProxyFactory.create({
    //   transport: Transport.TCP,
    //   options: {
    //     host: 'localhost',
    //     port: 8877,
    //   },
    // });
  }

  @Get()
  readList() {
    console.log('api/box Get readList');
    return this.boxMicroservice.emit<string[]>('LIST_BOX', []);
  }

}
