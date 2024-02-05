import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractEntity } from '../../common/database/abstract.entity';

@Schema({ versionKey: false, timestamps: true })
@ObjectType()
export class User extends AbstractEntity {
  @Prop()
  @Field()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
