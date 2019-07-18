
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinTable, ManyToMany, ManyToOne, UpdateDateColumn, OneToMany} from 'typeorm';

import { DepartmentEntity} from '../dictionaries/departments/department.entity';

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

  @Column('int')
  type: number;

  @Column('int')
  region: number;

  @Column('text')
  choiceJustification: string;

  @Column('simple-array')
  tags: string[];

  @Column({
    type: 'boolean',
    default: false,
  })
  hidden: boolean;

  @ManyToOne(type => DepartmentEntity, psrobject => psrobject.code)
  department: DepartmentEntity;

}



// id: number;
// 	type: string;
// 	region: string;
//	image: string;
	// title: string;
	// choiceJustification: string;
	// activity: string;  department
	// tags: string[];
//	links: Link[];
  // hidden = false;
  

// private Integer id;
// private String name;
// private BoxDto parentBox;
// private List<BoxDto> subBoxes;
// private List<PsrSummaryDto> psrDocuments;
// private String activity;
// private List<FileDto> criteria;
// private List<FileDto> technique;
// private List<FileDto> education;
// private List<FileDto> addMaterials;