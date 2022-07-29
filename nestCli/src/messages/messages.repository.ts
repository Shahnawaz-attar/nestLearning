import { Injectable } from '@nestjs/common';
import {readFile , writeFile} from 'fs/promises';

@Injectable()
export class MessagesRepository {
    constructor() { }
    

    async findOne (id: string){
        const messages = await readFile('./messages.json', 'utf8');
        const messagesArray = JSON.parse(messages);

        return messagesArray[id];
 
    }

    async findAll (){
        const messages = await readFile('./messages.json', 'utf8');
        const messagesArray = JSON.parse(messages);

        return messagesArray;
    }

    async create (message: String){
        
        const messages = await readFile('./messages.json', 'utf8');
        const messagesArray = JSON.parse(messages);

        const id =( Math.random() * 99).toFixed(0);
        messagesArray[id] = {
            id: id,
            message: message
        };

        await writeFile('./messages.json', JSON.stringify(messagesArray));
        


    }

}