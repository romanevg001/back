import {IsString, IsInt, IsArray, IsBoolean, IsNotEmpty, IsEmpty, IsBooleanString} from 'class-validator';

export class PsrobjectDTO {
  @IsString()
  title: string;

  @IsString()
  image: string;

  @IsString()
  choiceJustification: string;

  @IsBooleanString()
  hidden: boolean;

}

// tslint:disable-next-line:max-classes-per-file
export class PsrobjectRQ extends PsrobjectDTO {
  @IsString()
  regionId: string;

  @IsString()
  departmentId: string;

  @IsArray()
  tagsId: string[];

  @IsString()
  typeId: string;

}
