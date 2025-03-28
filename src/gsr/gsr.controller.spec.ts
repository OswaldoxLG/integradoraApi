import { Test, TestingModule } from '@nestjs/testing';
import { GsrController } from './gsr.controller';
import { GsrService } from './gsr.service';

describe('GsrController', () => {
  let controller: GsrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GsrController],
      providers: [GsrService],
    }).compile();

    controller = module.get<GsrController>(GsrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
