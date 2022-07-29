"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesRepository = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
let MessagesRepository = class MessagesRepository {
    constructor() { }
    async findOne(id) {
        const messages = await (0, promises_1.readFile)('./messages.json', 'utf8');
        const messagesArray = JSON.parse(messages);
        return messagesArray[id];
    }
    async findAll() {
        const messages = await (0, promises_1.readFile)('./messages.json', 'utf8');
        const messagesArray = JSON.parse(messages);
        return messagesArray;
    }
    async create(message) {
        const messages = await (0, promises_1.readFile)('./messages.json', 'utf8');
        const messagesArray = JSON.parse(messages);
        const id = (Math.random() * 99).toFixed(0);
        messagesArray[id] = {
            id: id,
            message: message
        };
        await (0, promises_1.writeFile)('./messages.json', JSON.stringify(messagesArray));
    }
};
MessagesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MessagesRepository);
exports.MessagesRepository = MessagesRepository;
//# sourceMappingURL=messages.repository.js.map