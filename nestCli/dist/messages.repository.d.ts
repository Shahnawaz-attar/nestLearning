export declare class MessagesRepository {
    constructor();
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(message: String): Promise<void>;
}
