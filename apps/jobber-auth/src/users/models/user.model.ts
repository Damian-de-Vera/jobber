import { AbstractModel } from '@jobber/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User Model' })
export class User extends AbstractModel {
  @Field()
  email: string;
}
