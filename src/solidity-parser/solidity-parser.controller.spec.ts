import { Test, TestingModule } from '@nestjs/testing';
import { SolidityParserController } from './solidity-parser.controller';
import { SolidityParserService } from './solidity-parser.service';

describe('SolidityParserController', () => {
  let controller: SolidityParserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolidityParserController],
      providers: [SolidityParserService],
    }).compile();

    controller = module.get<SolidityParserController>(SolidityParserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
