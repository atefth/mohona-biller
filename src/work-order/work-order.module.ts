import { Module } from '@nestjs/common';
import { WorkOrderResolver } from './work-order.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [WorkOrderResolver],
  imports: [PrismaModule],
})
export class WorkOrderModule {}
