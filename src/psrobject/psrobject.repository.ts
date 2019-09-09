
import {EntityRepository, Repository} from 'typeorm';

import { FilterPsrobjectDTO} from './filter-psrobject.dto';
import { PsrobjectDTO} from './psrobject.dto';
import { PsrobjectEntity} from './psrobject.entity';
import { UserEntity } from 'src/user/user.entity';
import { Logger } from '@nestjs/common';


@EntityRepository(PsrobjectEntity)
export class PsrobjectRepository extends Repository<PsrobjectEntity> {
  private logger = new Logger('PsrobjectRepository');

  async getPsrobject(
    filterPsrobjectDTO: FilterPsrobjectDTO,
    user: UserEntity,
  ): Promise<PsrobjectEntity[]> {
    const {status, search} = filterPsrobjectDTO;
    const query = this.createQueryBuilder('PsrobjectEntity');
    
    // query.where('PsrobjectEntity.userId = :userId', {userId: user.id})
    this.logger.verbose(`user: ${user.username}`);

   

    if (status) {
      query.andWhere('PsrobjectEntity.hidden = :status', { status });
    }
    if (search) {
      query.andWhere('PsrobjectEntity.title LIKE :search OR PsrobjectEntity.choiceJustification LIKE :search ', { search: `%${search}%` });
    }

    try {
      const psrobjects = await query.getMany();
      return psrobjects;
    } catch (err) {
      this.logger.error(`Failed get tasks for user "${user.username}", DTO: ${JSON.stringify(filterPsrobjectDTO)} `, err.stack);
    }

  }

}

