import { Test, TestingModule } from '@nestjs/testing';
import { GsrService } from './gsr.service';

describe('GsrService', () => {
  let service: GsrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GsrService],
    }).compile();

    service = module.get<GsrService>(GsrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
