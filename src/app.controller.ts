import { TypedRoute } from '@nestia/core';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Controller, UseInterceptors } from '@nestjs/common';

interface IUser {
  id: number;
  name: string;
}

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  @TypedRoute.Get()
  async main(): Promise<IUser> {
    return {
      id: 1,
      name: 'user1',
    };
  }
}
