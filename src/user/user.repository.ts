import { EntityRepository, Repository } from 'typeorm';
import { ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserEntity } from './user.entity';
import { UserDTOFull } from './user.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async signUp(authCredentalsDTO: UserDTOFull): Promise<void> {
    const {username, password, email} = authCredentalsDTO;

    const user = new UserEntity();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password + process.env.SECRET, user.salt);
    user.email = email;

    try {
     await user.save();
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException({
          error: 'User already exist',
        });
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

}

