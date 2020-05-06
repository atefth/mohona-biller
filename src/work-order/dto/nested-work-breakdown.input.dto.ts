import { IsNotEmpty, IsNumber } from 'class-validator';
import { NestedWorkBreakdownInput } from 'src/graphql.schema.generated';

export class NestedWorkBreakdownInputDto extends NestedWorkBreakdownInput {
  readonly id: string;

  readonly sideA: string;
  readonly sideB: string;

  @IsNumber()
  readonly quantity: number;

  @IsNumber()
  readonly ups: number;

  @IsNumber()
  readonly side: number;

  @IsNumber()
  readonly rate: number;
}
