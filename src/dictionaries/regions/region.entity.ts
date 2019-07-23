import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { PsrobjectEntity} from '../../psrobject/psrobject.entity';

@Entity('region')
export class RegionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  code: string;

  @OneToMany(type => PsrobjectEntity, psrobjectEntity => psrobjectEntity.region)
  psrObjects: PsrobjectEntity[];

}
