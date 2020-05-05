import { Test, TestingModule } from '@nestjs/testing';
import { WorkOrderResolver } from './work-order.resolver';

describe('WorkOrderResolver', () => {
  let resolver: WorkOrderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkOrderResolver],
    }).compile();

    resolver = module.get<WorkOrderResolver>(WorkOrderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
