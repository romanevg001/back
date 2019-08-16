import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import { PsrobjectEntity} from '../psrobject/psrobject.entity';

@Entity('box')
export class BoxEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column('text')
  name: string;

  @Column('text')
  views: number;

  @OneToMany(type => PsrobjectEntity, psrobjects => psrobjects.box)
  psrObjects: PsrobjectEntity[];
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