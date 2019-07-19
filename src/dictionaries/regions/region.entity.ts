import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('region')
export class RegionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  code: string;

}
