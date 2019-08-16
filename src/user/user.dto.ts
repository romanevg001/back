import {IsNotEmpty, IsEmail, IsString} from 'class-validator';
import {IdeaEntity} from '../idea/idea.entity';

export class UserDTO {

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

}

// tslint:disable-next-line:max-classes-per-file
export class UserDTOFull extends UserDTO {
  
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

}

// tslint:disable-next-line:max-classes-per-file
export class UserRO {
  id: string;
  username: string;
  email: string;
  created: Date;
  token?: string;
  bookmarks?: IdeaEntity[];
}
