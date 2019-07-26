import {IsString} from 'class-validator';

export class RegionDTO {
  @IsString()
  name: string;

  @IsString()
  code: string;
}
