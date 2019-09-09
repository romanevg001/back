import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';
import { FileDTO } from './file.dto';
export declare class FileService {
    private fileRepository;
    constructor(fileRepository: Repository<FileEntity>);
    read(id: string): Promise<FileEntity>;
    load(data: FileDTO): Promise<FileDTO>;
}
