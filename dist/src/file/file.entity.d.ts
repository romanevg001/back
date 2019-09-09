export declare enum TypeOfFile {
    pdf = "pdf",
    doc = "doc",
    img = "img",
    ppt = "ppt",
    xls = "xls",
    archive = "archive",
    video = "video"
}
export declare class FileEntity {
    id: string;
    created: Date;
    updated: Date;
    type: TypeOfFile;
    name: string;
    file: string;
    size: number;
    countSize(): Promise<void>;
    range: number;
    views: number;
}
