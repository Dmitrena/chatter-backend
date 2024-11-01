import { AbstractEntity } from './../../common/database/abstract.entity';
import { ObjectType, Field } from '@nestjs/graphql';
import { Message } from '../messages/entities/message.entity';

@ObjectType()
export class Chat extends AbstractEntity {
  @Field({ nullable: true })
  name: string;

  @Field(() => Message, { nullable: true })
  latestMessage?: Message;
}
