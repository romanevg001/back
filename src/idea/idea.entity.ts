import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinTable, ManyToMany, ManyToOne, UpdateDateColumn, OneToMany} from 'typeorm';
import {UserEntity} from '../user/user.entity';
import {CommentEntity} from '../comment/comment.entity';
import {InputType, Field, ID, Int} from 'type-graphql';

@Entity('idea')
export class IdeaEntity {
  // @Field(type  => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Field()
  @CreateDateColumn()
  created: Date;

  // @Field()
  @UpdateDateColumn()
  updated: Date;

  // @Field()
  @Column('text')
  idea: string;

  // @Field()
  @Column('text')
  description: string;

  @ManyToOne(type => UserEntity, author => author.ideas)
  author: UserEntity;

  @ManyToMany(type => UserEntity, { cascade: true })
  @JoinTable()
  upvotes: UserEntity[];

  @ManyToMany(type => UserEntity, { cascade: true })
  @JoinTable()
  downvotes: UserEntity[];

  @OneToMany(type => CommentEntity, comment => comment.idea, {cascade: true})
  comments: CommentEntity[];

}
