import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(
    // private usersService: UsersService,
    // private postsService: PostsService,
  ) {}

  @Query(() => String)
  async hello() {
    return "hello";
  }

  // @ResolveField()
  // async posts(@Parent() user: User) {
  //   const { id } = user;
  //   return this.postsService.findAll({ userId: id });
  // }
}