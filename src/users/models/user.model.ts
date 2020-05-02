import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class User extends Document {
  @Field(() => ID!)
  id: String;
  @Field()
  firstName: String;
  @Field({ nullable: true })
  lastName?: String;
  @Field({ nullable: true })
  dob?: Date;
  @Field()
  email: String;
  @Field()
  password: String;
}
