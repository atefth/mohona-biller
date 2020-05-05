import { Module } from '@nestjs/common';
import { WorkBreakdownResolver } from './work-breakdown.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [WorkBreakdownResolver],
})
export class WorkBreakdownModule {}
