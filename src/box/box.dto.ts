import {IsString, IsArray, IsInt} from 'class-validator';

export class BoxDTO {
  @IsString()
  name: string;

  @IsInt()
  views: number;
}

// tslint:disable-next-line:max-classes-per-file
export class BoxRQ {
  @IsString()
  name: string;

  @IsArray()
  psrObjectsIds: string[];

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
