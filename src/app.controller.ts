import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getNbConn(): Promise<string> {
    const res = await this.appService.getNbConn().then((data) => {
      return data;
    });
    return res;
  }
}
