import { Test, TestingModule } from '@nestjs/testing';
import { SolidityParserService } from './solidity-parser.service';

describe('SolidityParserService', () => {
  let service: SolidityParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolidityParserService],
    }).compile();

    service = module.get<SolidityParserService>(SolidityParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
