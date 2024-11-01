import { User } from './../../../users/entities/user.entity';
import { AbstractEntity } from './../../../common/database/abstract.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Message extends AbstractEntity {
  @Field()
  content: string;

  @Field()
  createdAt: Date;

  @Field(() => User)
  user: User;

  @Field()
  chatId: string;
}
