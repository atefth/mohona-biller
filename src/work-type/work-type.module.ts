import { Module } from '@nestjs/common';
import { WorkTypeResolver } from './work-type.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [WorkTypeResolver],
})
export class WorkTypeModule {}
