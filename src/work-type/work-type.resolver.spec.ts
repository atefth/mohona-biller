import { Test, TestingModule } from '@nestjs/testing';
import { WorkTypeResolver } from './work-type.resolver';

describe('WorkTypeResolver', () => {
  let resolver: WorkTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkTypeResolver],
    }).compile();

    resolver = module.get<WorkTypeResolver>(WorkTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
