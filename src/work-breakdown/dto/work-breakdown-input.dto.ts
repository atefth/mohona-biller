import { IsNotEmpty, IsNumber } from 'class-validator';
import { WorkBreakdownInput } from 'src/graphql.schema.generated';

export class WorkBreakdownInputDto extends WorkBreakdownInput {
  @IsNotEmpty()
  readonly workOrderId: string;

  readonly sideA: string;
  readonly sideB: string;

  @IsNumber()
  readonly quantity: number;

  @IsNumber()
  readonly side: number;

  @IsNumber()
  readonly rate: number;
}
