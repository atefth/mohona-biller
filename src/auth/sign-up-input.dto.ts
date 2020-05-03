import { IsEmail, MinLength, IsAlphanumeric } from 'class-validator';
import { SignUpInput } from '../graphql.schema.generated';

export class SignUpInputDto extends SignUpInput {
  @IsAlphanumeric()
  readonly firstName: string;

  @IsEmail()
  readonly email: string;

  @MinLength(6)
  readonly password: string;
}
