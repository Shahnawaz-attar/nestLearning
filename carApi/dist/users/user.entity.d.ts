export declare class User {
    id: number;
    email: string;
    password: string;
    logInsert(): void;
    logRemove(): void;
    logBeforeInsert(): void;
    logAfterLoad(): void;
}
