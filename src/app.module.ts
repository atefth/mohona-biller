import { Module, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphqlOptions } from './graphql.options';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { WorkOrderModule } from './work-order/work-order.module';
import { WorkTypeModule } from './work-type/work-type.module';
import { ClientModule } from './client/client.module';
import { WorkBreakdownModule } from './work-breakdown/work-breakdown.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    WorkOrderModule,
    WorkTypeModule,
    ClientModule,
    WorkBreakdownModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
