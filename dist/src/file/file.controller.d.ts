import { FileService } from './file.service';
import { FileDTO } from './file.dto';
export declare class FileController {
    private fileService;
    constructor(fileService: FileService);
    getOne(id: string): Promise<import("./file.entity").FileEntity>;
    setOne(data: FileDTO): Promise<FileDTO>;
}
