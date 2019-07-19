
import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert, UpdateDateColumn, OneToMany} from 'typeorm';
import * as fs from 'fs';

export enum TypeOfFile {
  pdf = 'pdf',
  doc = 'doc',
  img = 'img',
  ppt = 'ppt',
  xls = 'xls',
  archive = 'archive',
  video = 'video',
}

@Entity('file')
export class FileEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column({
    type: 'enum',
    enum: TypeOfFile,
    default: TypeOfFile.doc,
  })
  type: TypeOfFile;

  @Column('text')
  name: string;

  @Column('text')
  file: string;

  @Column('int')
  size: number;

  @BeforeInsert()
  async countSize() {
    const stats = fs.statSync(this.file);
    this.size = stats.size;
  }

  @Column('int')
  range: number;

  @Column('int')
  views: number;

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