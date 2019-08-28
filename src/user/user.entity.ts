
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, OneToMany, ManyToMany, JoinTable, BaseEntity} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserRO } from './user.dto';
import { IdeaEntity } from '../idea/idea.entity';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'text',
    unique: true,
  })
  username: string;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column('text')
  password: string;

  @Column('text')
  salt: string;

  @OneToMany(type => IdeaEntity, idea => idea.author)
  ideas: IdeaEntity[];

  @ManyToMany(type => IdeaEntity, {cascade: true})
  @JoinTable()
  bookmarks: IdeaEntity[];

  // @BeforeInsert()
  // async hashPassword() {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }

  toResponseObject(showToken: boolean = true): UserRO {
    const {id, created, username, email } = this;
   // return {id, created, username, token};
    const responceObject: any = {id, created, username, email};

    // if (showToken) {
    //   responceObject.token = token;
    // }
    if (this.ideas) {
      responceObject.ideas = this.ideas;
    }
    if (this.bookmarks) {
      responceObject.bookmarks = this.bookmarks;
    }
    return responceObject;
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  // private get token() {
  //   const {id, username} = this;
  //   return jwt.sign(
  //     {
  //       id, username,
  //     },
  //     process.env.SECRET,
  //     {expiresIn: '7d'},
  //   );
  // }

  async validatePassword(pass: string): Promise<boolean> {
    // console.log('validatePassword=>>>', bcrypt.compare(pass + process.env.SECRET, this.password));
    /// const hash = await bcrypt.hash(pass + process.env.SECRET, this.salt);
    return await bcrypt.compare(pass + process.env.SECRET, this.password); ///hash === this.password;
  }

}
