import {IsString, IsInt, IsArray, IsBoolean, IsNotEmpty, IsEmpty} from 'class-validator';

export class PsrobjectDTO {
  @IsString()
  title: string;

  // @IsString()
  // image: string;

  // @IsString()
  // type: string;

  // @IsInt()
  // region: number;

  // @IsString()
  // choiceJustification: string;

  // @IsArray()
  // tags: string[];

  
  // hidden: boolean;

}

// tslint:disable-next-line:max-classes-per-file
export class PsrobjectRQ extends PsrobjectDTO {
  @IsString()
  departmentId: string;
}

// tslint:disable-next-line:max-classes-per-file
export class PsrobjectRS {
  id?: string;
  created: Date;
  updated: Date;
  title: string;
  // image: string;
  // type: string;
  // region: number;
  // choiceJustification: string;
  // tags: string[];
  // hidden: boolean;
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