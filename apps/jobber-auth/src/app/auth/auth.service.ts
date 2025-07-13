import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginInput } from './dto/login.input';
import { Response } from 'express';
import { UsersService } from '../users/users.service';
import { compare } from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './toke-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService
  ) {}
  async login({ email, password }: LoginInput, res: Response) {
    const user = await this.verifyUser(email, password);
    const expires = new Date();
    expires.setMilliseconds(
      expires.getTime() +
        parseInt(this.configService.getOrThrow('JWT_EXPIRATION_MS'))
    );
    const tokenPayload: TokenPayload = {
      userId: user.id,
    };
    const accessToken = this.jwtService.sign(tokenPayload);
    res.cookie('Authentication', accessToken, {
      httpOnly: true,
      secure: this.configService.get('NODE_ENV') === 'production',
      expires: expires,
    });
    return user;
  }

  async verifyUser(email: string, password: string) {
    try {
      const storedUser = await this.usersService.getUser({ email });
      const isAuthenticated = await compare(password, storedUser.password);
      if (!isAuthenticated) throw new UnauthorizedException();
      return storedUser;
    } catch (e) {
      throw new UnauthorizedException('Credentials are incorrect');
    }
  }
}
