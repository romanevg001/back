export declare class PsrobjectDTO {
    title: string;
    image: string;
    choiceJustification: string;
    hidden: boolean;
}
export declare class PsrobjectRQ extends PsrobjectDTO {
    regionId: string;
    departmentId: string;
    tagsId: string[];
    typeId: string;
}
