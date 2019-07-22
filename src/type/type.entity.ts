
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinTable, ManyToMany, ManyToOne, UpdateDateColumn, OneToMany} from 'typeorm';
import { PsrobjectEntity} from '../psrobject/psrobject.entity';

@Entity('type')
export class TypeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @OneToMany(type => PsrobjectEntity, psrobjectEntity => psrobjectEntity.type)
  psrobjects: PsrobjectEntity[];

}
