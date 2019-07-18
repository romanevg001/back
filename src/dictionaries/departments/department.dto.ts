import {IsString} from 'class-validator';

export class DepartmentDTO {
  @IsString()
  name: string;
}
