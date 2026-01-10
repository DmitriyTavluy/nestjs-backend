import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {massage: 'Hello World and Dima!'};
  }
}
