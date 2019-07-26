import {IsString, IsArray, IsBoolean} from 'class-validator';

export class SearchDTO {

  @IsString()
  requestedString: string;

  @IsArray()
  industries: string[];

  @IsArray()
  regions: string[];

  @IsArray()
  materialTypes: string[];

  @IsArray()
  documentTypes: string[];

  @IsArray()
  folders: string[];

  @IsBoolean()
  searchInBoxSolutions: boolean;

  @IsBoolean()
  searchInDocuments: boolean;

  @IsBoolean()
  searchInPsrObjects: boolean;

}
