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

// tslint:disable-next-line:max-classes-per-file
export class PsrobjectRS {
  id?: string;
  created: Date;
  updated: Date;
  title: string;
  image: string;
  // type: string;
  choiceJustification: string;
  // tags: string[];
  // hidden: boolean;
  regionId: string;
  departmentId: string;
}

// private Integer id;
// private String name;
// private BoxDto parentBox;
// private List<BoxDto> subBoxes;
// private List<PsrSummaryDto> psrDocuments;
// private String activity;
// private List<FileDto> criteria;
// private List<FileDto> technique;
// private List<FileDto> education;
// private List<FileDto> addMaterials;