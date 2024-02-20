import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TokenPayload } from 'src/auth/token-payload.interface';
import { CurrentUser } from './../auth/current-user.decorator';
import { GqlAuthGuard } from './../auth/guards/gql-auth.guard';
import { ChatsService } from './chats.service';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { Chat } from './entities/chat.entity';

@Resolver(() => Chat)
export class ChatsResolver {
  constructor(private readonly chatsService: ChatsService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Chat)
  async createChat(
    @Args('createChatInput') createChatInput: CreateChatInput,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.chatsService.create(createChatInput, user._id);
  }

  @Query(() => [Chat], { name: 'chats' })
  async findAll() {
    return this.chatsService.findAll();
  }

  @Query(() => Chat, { name: 'chat' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.chatsService.findOne(id);
  }

  @Mutation(() => Chat)
  async updateChat(@Args('updateChatInput') updateChatInput: UpdateChatInput) {
    return this.chatsService.update(updateChatInput.id, updateChatInput);
  }

  @Mutation(() => Chat)
  async removeChat(@Args('id', { type: () => Int }) id: number) {
    return this.chatsService.remove(id);
  }
}
