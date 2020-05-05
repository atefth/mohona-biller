import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { WorkBreakdown } from 'src/graphql.schema.generated';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { WorkBreakdownInputDto } from './dto/work-breakdown-input.dto';
// import { WorkBreakdownInputDto } from './dto/work-breakdown-input.dto';

@Resolver('WorkBreakdown')
export class WorkBreakdownResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [WorkBreakdown])
  @UseGuards(GqlAuthGuard)
  async getWorkBreakdowns() {
    return await this.prisma.client.workBreakdowns();
  }

  @Query(() => WorkBreakdown)
  @UseGuards(GqlAuthGuard)
  async getWorkBreakdownById(@Args('id') id: string) {
    return await this.prisma.client.workBreakdown({ id });
  }

  @Mutation(() => WorkBreakdown)
  @UseGuards(GqlAuthGuard)
  async createWorkBreakdown(@Args('input') input: WorkBreakdownInputDto) {
    const query = this.workBreakdownParams(input);
    return await this.prisma.client.createWorkBreakdown(query);
  }

  @Mutation(() => WorkBreakdown!)
  @UseGuards(GqlAuthGuard)
  async updateWorkBreakdown(
    @Args('input') input: WorkBreakdownInputDto,
    @Args('id') id: string,
  ) {
    const query = this.workBreakdownParams(input);
    return await this.prisma.client.updateWorkBreakdown({
      data: query,
      where: { id },
    });
  }

  @Mutation(() => WorkBreakdown!)
  @UseGuards(GqlAuthGuard)
  async deleteWorkBreakdown(@Args('id') id: string) {
    return await this.prisma.client.deleteWorkBreakdown({ id });
  }

  private workBreakdownParams(input: WorkBreakdownInputDto) {
    const { workOrderId, ...rest } = input;
    return {
      workOrder: {
        connect: { id: workOrderId },
      },
      ...rest,
    };
  }
}
