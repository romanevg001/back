import { TypeOfFile } from './file.entity';
export declare class FileDTO {
    name: string;
    file: string;
    size: number;
    range: number;
    views: number;
    type: TypeOfFile;
}
