import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinTable, ManyToMany, ManyToOne, UpdateDateColumn, OneToMany} from 'typeorm';
import { PsrobjectEntity} from '../../psrobject/psrobject.entity';

@Entity('department')
export class DepartmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @OneToMany(type => PsrobjectEntity, psrobjectEntity => psrobjectEntity.department)
  psrobjects: PsrobjectEntity[];

}
