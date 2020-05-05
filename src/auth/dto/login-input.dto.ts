import { IsEmail, MinLength, IsAlphanumeric } from 'class-validator';
import { LoginInput } from '../../graphql.schema.generated';

export class LoginInputDto extends LoginInput {
  @IsEmail()
  readonly email: string;

  @MinLength(6)
  readonly password: string;
}
