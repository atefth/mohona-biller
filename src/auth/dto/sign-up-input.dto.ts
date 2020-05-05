import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { SignUpInput } from '../../graphql.schema.generated';

export class SignUpInputDto extends SignUpInput {
  @IsNotEmpty()
  readonly firstName: string;

  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @MinLength(6)
  readonly password: string;
}
