import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import {ObjectType, Field, ID} from 'type-graphql';
import { PsrobjectEntity} from '../psrobject/psrobject.entity';

@ObjectType()
@Entity('box')
export class BoxEntity {
  @Field(_ => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(_ => String)
  @CreateDateColumn()
  created: Date;

  @Field(_ => String)
  @UpdateDateColumn()
  updated: Date;

  // @Field()
  // @Column('text')
  // name: string;

  // @Field()
  // @Column('int')
  // views: number;

  // @Field()
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