import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { WorkOrder } from '../graphql.schema.generated';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { WorkOrderInputDto } from './dto/work-order-input.dto';

@Resolver('WorkOrder')
export class WorkOrderResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [WorkOrder])
  @UseGuards(GqlAuthGuard)
  async getWorkOrders() {
    return await this.prisma.client.workOrders();
  }

  @Query(() => WorkOrder)
  @UseGuards(GqlAuthGuard)
  async getWorkOrderById(@Args('id') id: string) {
    return await this.prisma.client.workOrder({ id });
  }

  @Mutation(() => WorkOrder)
  @UseGuards(GqlAuthGuard)
  async createWorkOrder(@Args('input') input: WorkOrderInputDto) {
    const query = this.workOrderParams(input);
    return await this.prisma.client.createWorkOrder(query);
  }

  @Mutation(() => WorkOrder!)
  @UseGuards(GqlAuthGuard)
  async updateWorkOrder(
    @Args('input') input: WorkOrderInputDto,
    @Args('id') id: string,
  ) {
    const query = this.workOrderParams(input, 'UPDATE');
    return await this.prisma.client.updateWorkOrder({
      data: query,
      where: { id },
    });
  }

  @Mutation(() => WorkOrder!)
  @UseGuards(GqlAuthGuard)
  async deleteWorkOrder(@Args('id') id: string) {
    return await this.prisma.client.deleteWorkOrder({ id });
  }

  private workOrderParams(input: WorkOrderInputDto, action: string = 'CREATE') {
    const { item, clientId, workerId, workTypeIds, workBreakdowns } = input;

    let query = {
      item,
      client: {
        connect: { id: clientId },
      },
      workTypes: {
        connect: workTypeIds.map(workTypeId => {
          return { id: workTypeId };
        }),
      },
    };
    if (workerId) {
      query['worker'] = {
        connect: { id: workerId },
      };
    }
    if (action === 'CREATE') {
      if (workBreakdowns) {
        query['workBreakdowns'] = {
          create: workBreakdowns.map(workBreakdown => {
            return { ...workBreakdown };
          }),
        };
      } else {
        query['workBreakdowns'] = {
          create: [{}],
        };
      }
    } else if (action === 'UPDATE') {
      if (workBreakdowns) {
        query['workBreakdowns'] = {
          update: workBreakdowns.map(({ id, ...rest }) => {
            return { where: { id }, data: rest };
          }),
        };
      }
    }
    return query;
  }
}
