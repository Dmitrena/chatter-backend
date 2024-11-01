import { PaginationArgs } from './../../../common/dto/pagination-args.dto';
import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetMessagesArgs extends PaginationArgs {
  @Field()
  @IsNotEmpty()
  chatId: string;
}
