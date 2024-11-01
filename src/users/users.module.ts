import { S3Module } from './../common/s3/s3.module';
import { DatabaseModule } from './../common/database/database.module';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { userSchema } from './entities/user.document';

@Module({
  imports: [
    DatabaseModule.forFeature([
      {
        name: User.name,
        schema: userSchema,
      },
    ]),
    S3Module,
  ],
  providers: [UsersResolver, UsersService, UsersRepository],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
