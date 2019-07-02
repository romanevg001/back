
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserRO } from './user.dto';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'text',
    unique: true,
  })
  username: string;

  @Column('text')
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toResponceObject(showToken: boolean = true): UserRO {
    const {id, created, username, token } = this;
   // return {id, created, username, token};
    const responceObject: any = {id, created, username};

    if (showToken) {
      responceObject.token = token;
    }
    return responceObject;
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  private get token() {
    const {id, username} = this;
    return jwt.sign(
      {
        id, username,
      },
      process.env.SECRET,
      {expiresIn: '7d'},
    );
  }

}
