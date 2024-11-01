import { UsersModule } from './../users/users.module';
import { DatabaseModule } from './../common/database/database.module';
import { forwardRef, Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsResolver } from './chats.resolver';
import { ChatsRepository } from './chats.repository';
import { Chat } from './entities/chat.entity';
import { MessagesModule } from './messages/messages.module';
import { ChatSchema } from './entities/chat.document';
import { ChatsController } from './chats.controller';

@Module({
  imports: [
    DatabaseModule.forFeature([
      {
        name: Chat.name,
        schema: ChatSchema,
      },
    ]),
    forwardRef(() => MessagesModule),
    UsersModule,
  ],
  providers: [ChatsResolver, ChatsService, ChatsRepository],
  exports: [ChatsRepository, ChatsService],
  controllers: [ChatsController],
})
export class ChatsModule {}
