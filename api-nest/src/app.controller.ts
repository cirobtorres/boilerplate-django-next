import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly deleteMeLater: AppService) {}

  @Get()
  hello() {
    return this.deleteMeLater.hello();
  }
}
