import {IsString} from 'class-validator';

export class TagDTO {

  @IsString()
  name: string;

}
