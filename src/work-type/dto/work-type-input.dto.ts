import { IsNumber, IsNotEmpty } from 'class-validator';
import { WorkTypeInput } from '../../graphql.schema.generated';

export class WorkTypeInputDto extends WorkTypeInput {
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  readonly rate: number;
}
