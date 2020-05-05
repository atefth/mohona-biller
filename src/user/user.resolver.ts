import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../graphql.schema.generated';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UserProfileInputDto } from './dto/user-profile.dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [User]!)
  @UseGuards(GqlAuthGuard)
  async users() {
    return await this.prisma.client.users();
  }

  @Mutation(() => User!)
  @UseGuards(GqlAuthGuard)
  async updateUserProfile(
    @Args('id') id: string,
    @Args('input') input: UserProfileInputDto,
  ) {
    return await this.prisma.client.updateUser({
      data: input,
      where: { id },
    });
  }
}
