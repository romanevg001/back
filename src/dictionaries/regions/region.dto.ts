import {IsString} from 'class-validator';

export class RegionDTO {
  @IsString()
  name: string;

  @IsString()
  code: string;
}

// tslint:disable-next-line:max-classes-per-file
// export class IdeaRO {
//   id?: string;
//   updated: Date;
//   created: Date;
//   idea: string;
//   description: string;
//   author: UserRO;
//   upvotes?: number;
//   downvotes?: number;
// }

