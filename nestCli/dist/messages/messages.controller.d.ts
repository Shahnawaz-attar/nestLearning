import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messagesService;
    constructor(messagesService: MessagesService);
    listMessages(): Promise<any>;
    createMessage(createMessageDto: CreateMessageDto): Promise<void>;
    findMessage(id: string): Promise<any>;
}
