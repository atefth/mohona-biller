import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { UserProfileInput } from '../../graphql.schema.generated';

export class UserProfileInputDto extends UserProfileInput {
  @IsNotEmpty()
  readonly firstName: string;

  readonly lastName: string;
  readonly dob: string;

  @IsEmail()
  readonly email: string;
}
