import { Injectable } from '@nestjs/common';
import { mystring } from '@lib/library';

@Injectable()
export class AppService {
  getHello(): string {
    return mystring;
  }
}
