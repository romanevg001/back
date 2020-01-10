import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';

@Module({
  imports: [
    MaterialService,
  ],
})
export class MaterialModule {

}
