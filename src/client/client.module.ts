import { Module } from '@nestjs/common';
import { ClientResolver } from './client.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ClientResolver],
})
export class ClientModule {}
