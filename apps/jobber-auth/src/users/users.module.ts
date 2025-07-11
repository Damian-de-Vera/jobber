import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from '../app/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
