import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WorkType } from 'src/graphql.schema.generated';
import { PrismaService } from '../prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { WorkTypeInputDto } from './dto/work-type-input.dto';

@Resolver('WorkType')
export class WorkTypeResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [WorkType]!)
  @UseGuards(GqlAuthGuard)
  async getWorkTypes() {
    return await this.prisma.client.workTypes();
  }

  @Query(() => WorkType)
  @UseGuards(GqlAuthGuard)
  async getWorkTypeById(@Args('id') id: string) {
    return await this.prisma.client.workType({ id });
  }

  @Mutation(() => WorkType!)
  @UseGuards(GqlAuthGuard)
  async createWorkType(@Args('input') input: WorkTypeInputDto) {
    return await this.prisma.client.createWorkType({ ...input });
  }

  @Mutation(() => WorkType!)
  @UseGuards(GqlAuthGuard)
  async updateWorkType(
    @Args('input') input: WorkTypeInputDto,
    @Args('id') id: string,
  ) {
    return await this.prisma.client.updateWorkType({
      data: input,
      where: { id },
    });
  }

  @Mutation(() => WorkType!)
  @UseGuards(GqlAuthGuard)
  async deleteWorkType(@Args('id') id: string) {
    return await this.prisma.client.deleteWorkType({ id });
  }
}
