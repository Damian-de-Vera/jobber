import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import {
  AuthenticateRequest,
  AuthServiceController,
  AuthServiceControllerMethods,
  User,
} from 'types/proto/auth';

@Controller()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  authenticate(
    request: AuthenticateRequest
  ): Promise<User> | Observable<User> | User {
    console.log(request);
    return { id: 1, email: 'damian@jobber.com' } as User;
  }
}
