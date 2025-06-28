import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ description: 'Abstract Model', isAbstract: true })
export class AbstractModel {
  @Field(() => ID)
  id: number;
}
