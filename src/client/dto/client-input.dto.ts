import { IsNotEmpty } from 'class-validator';
import { ClientInput } from '../../graphql.schema.generated';

export class ClientInputDto extends ClientInput {
  @IsNotEmpty()
  readonly name: string;

  readonly contact: string;
}
