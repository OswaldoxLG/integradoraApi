import { Test, TestingModule } from '@nestjs/testing';
import { BpmService } from './bpm.service';

describe('BpmService', () => {
  let service: BpmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BpmService],
    }).compile();

    service = module.get<BpmService>(BpmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
