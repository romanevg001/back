import {IsString, IsInt} from 'class-validator';

export class FileDTO {

  @IsString()
  name: string;

  @IsString()
  file: string;

  @IsInt()
  size: number;

  @IsInt()
  range: number;

  @IsInt()
  views: number;

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