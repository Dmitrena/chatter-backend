import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ChatsService } from './chats.service';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Get('count')
  @UseGuards(JwtAuthGuard)
  async countChats() {
    return this.chatsService.countChats();
  }
}
