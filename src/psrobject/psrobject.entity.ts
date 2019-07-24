
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinTable, ManyToMany, ManyToOne, UpdateDateColumn, OneToMany} from 'typeorm';

import { DepartmentEntity} from '../dictionaries/departments/department.entity';
import { RegionEntity} from '../dictionaries/regions/region.entity';
import { TagEntity} from '../tag/tag.entity';
import { TypeEntity} from '../type/type.entity';
import { BoxEntity} from '../box/box.entity';

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

  @ManyToOne(type => TypeEntity, type => type.psrObjects)
  type: TypeEntity;

  @ManyToOne(type => RegionEntity, region => region.psrObjects)
  region: RegionEntity;

  @Column('text')
  choiceJustification: string;

  @ManyToMany(type => TagEntity, {cascade: true})
  @JoinTable()
  tags: TagEntity[];

  @Column({
    type: 'boolean',
    default: false,
  })
  hidden: boolean;

  @ManyToOne(type => DepartmentEntity, department => department.psrobjects)
  department: DepartmentEntity;

  @ManyToOne(type => BoxEntity, box => box.psrObjects)
  box: BoxEntity;
}

