import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import {InputType, ObjectType, Field, ID, Int} from 'type-graphql';
import { PsrobjectEntity} from '../psrobject/psrobject.entity';

@ObjectType('Box')
@Entity('box')
export class BoxEntity {
  @Field(type  => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(type => String)
  @CreateDateColumn()
  created: Date;

  @Field(type => String)
  @UpdateDateColumn()
  updated: Date;

  @Field()
  @Column('text')
  name: string;

  @Field(type => Int)
  @Column('text')
  views: number;

  // @Field(type => [PsrobjectEntity])
  // @OneToMany(type => PsrobjectEntity, psrobjects => psrobjects.box)
  // psrObjects: PsrobjectEntity[];
}




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