import { IsArray, IsNotEmpty } from 'class-validator';
import {
  WorkOrderInput,
  NestedWorkBreakdownInput,
} from 'src/graphql.schema.generated';

export class WorkOrderInputDto extends WorkOrderInput {
  @IsNotEmpty()
  readonly item: string;

  @IsArray()
  readonly workTypeIds: [];

  readonly workerId: string;

  @IsNotEmpty()
  readonly clientId: string;

  readonly workBreakdowns: NestedWorkBreakdownInput[];
}
