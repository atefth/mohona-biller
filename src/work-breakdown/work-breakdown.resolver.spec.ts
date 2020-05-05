import { Test, TestingModule } from '@nestjs/testing';
import { WorkBreakdownResolver } from './work-breakdown.resolver';

describe('WorkBreakdownResolver', () => {
  let resolver: WorkBreakdownResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkBreakdownResolver],
    }).compile();

    resolver = module.get<WorkBreakdownResolver>(WorkBreakdownResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
