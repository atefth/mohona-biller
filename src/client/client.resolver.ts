import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { Client } from 'src/graphql.schema.generated';
import { UseGuards } from '@nestjs/common';
import { ClientInputDto } from './dto/client-input.dto';

@Resolver('Client')
export class ClientResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Client])
  @UseGuards(GqlAuthGuard)
  async getClients() {
    return await this.prisma.client.clients();
  }

  @Query(() => Client)
  @UseGuards(GqlAuthGuard)
  async getClientById(@Args('id') id: string) {
    return await this.prisma.client.client({ id });
  }

  @Mutation(() => Client)
  @UseGuards(GqlAuthGuard)
  async createClient(@Args('input') input: ClientInputDto) {
    return await this.prisma.client.createClient({ ...input });
  }

  @Mutation(() => Client!)
  @UseGuards(GqlAuthGuard)
  async updateClient(
    @Args('input') input: ClientInputDto,
    @Args('id') id: string,
  ) {
    return await this.prisma.client.updateClient({
      data: input,
      where: { id },
    });
  }

  @Mutation(() => Client!)
  @UseGuards(GqlAuthGuard)
  async deleteClient(@Args('id') id: string) {
    return await this.prisma.client.deleteClient({ id });
  }
}
