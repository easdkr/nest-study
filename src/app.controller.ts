import { Controller, Get } from '@nestjs/common';
import { AppService, ServiceB } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly serviceB: ServiceB,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/serviceB')
  getHelloB(): string {
    return this.serviceB.getHello();
  }
}
