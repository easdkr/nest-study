import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, ServiceA, ServiceB } from './app.service';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [UsersModule, AccountModule],
  controllers: [AppController],
  providers: [AppService, ServiceB, ServiceA],
})
export class AppModule {}
