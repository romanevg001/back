
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinTable, ManyToMany, ManyToOne, UpdateDateColumn, OneToMany} from 'typeorm';
import { PsrobjectEntity} from '../psrobject/psrobject.entity';

@Entity('tag')
export class TagEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column('text')
  name: string;

  @ManyToMany(type => PsrobjectEntity, {cascade: true})
  psrobjects: PsrobjectEntity[];

}
