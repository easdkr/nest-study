import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  get(id: number) {
    return `This action get a #${id} user`;
  }
}
