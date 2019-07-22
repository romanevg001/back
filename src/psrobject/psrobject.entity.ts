
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinTable, ManyToMany, ManyToOne, UpdateDateColumn, OneToMany} from 'typeorm';

import { DepartmentEntity} from '../dictionaries/departments/department.entity';
import { RegionEntity} from '../dictionaries/regions/region.entity';

@Entity('psrobject')
export class PsrobjectEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column('text')
  title: string;

  @Column('text')
  image: string;

  // @Column('text')
  // type: string;

  @ManyToOne(type => RegionEntity, region => region.psrobjects)
  region: RegionEntity;

  @Column('text')
  choiceJustification: string;

  // @Column('simple-array')
  // tags: string[];

  // @Column({
  //   type: 'boolean',
  //   default: false,
  // })
  // hidden: boolean;

  @ManyToOne(type => DepartmentEntity, department => department.psrobjects)
  department: DepartmentEntity;

}

