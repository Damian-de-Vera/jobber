import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma-clients/jobber-auth';
import { PrismaService } from '../app/prisma/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    const user = await this.prismaService.user.create({
      data: {
        ...data,
        password: await hash(data.password, 10),
      },
    });
    return user;
  }

  async getUsers() {
    return this.prismaService.user.findMany();
  }
}
