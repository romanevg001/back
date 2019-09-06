
import {EntityRepository, Repository} from 'typeorm';

import { FilterPsrobjectDTO} from './filter-psrobject.dto';
import { PsrobjectDTO} from './psrobject.dto';
import { PsrobjectEntity} from './psrobject.entity';
import { UserEntity } from 'src/user/user.entity';

@EntityRepository(PsrobjectEntity)
export class PsrobjectRepository extends Repository<PsrobjectEntity> {

  async getPsrobject(
    filterPsrobjectDTO: FilterPsrobjectDTO,
    user: UserEntity,
  ): Promise<PsrobjectEntity[]> {
    const {status, search} = filterPsrobjectDTO;
    const query = this.createQueryBuilder('PsrobjectEntity');
    // query.where('PsrobjectEntity.userId = :userId', {userId: user.id})

    if (status) {
      query.andWhere('PsrobjectEntity.hidden = :status', { status });
    }
    if (search) {
      query.andWhere('PsrobjectEntity.title LIKE :search OR PsrobjectEntity.choiceJustification LIKE :search ', { search: `%${search}%` });
    }

    const psrobjects = await query.getMany();
    return psrobjects;
  }

}

