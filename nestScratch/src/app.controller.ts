import { Controller, Get } from "@nestjs/common";


@Controller('/home')
export class AppController {
    constructor() { }

    @Get('/contact')
    getRootRoute() {
        return 'Hello World! its seprate file';
    }

    @Get('/gallery')
    getGalleryRoute() {
        return 'Gallery';
    }
}

 