import { Controller, Get, Post,Param,Body,NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  
    constructor(private messagesService: MessagesService) { }


    @Get()
    listMessages() {
        return  this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() createMessageDto: CreateMessageDto) {
        return this.messagesService.create(createMessageDto.message);
    }

    @Get('/:id')
    async findMessage(@Param('id') id: string) {
        const msg=  await this.messagesService.findOne(id);
        if (!msg) {
            throw new NotFoundException('Message not found');
        }
        return msg;
        

    }

   
    
}
