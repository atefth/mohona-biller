import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
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
