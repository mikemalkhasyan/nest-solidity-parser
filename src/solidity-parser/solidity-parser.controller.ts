import {Controller, Get} from '@nestjs/common';
import { SolidityParserService } from './solidity-parser.service';

@Controller('solidity-parser')
export class SolidityParserController {
  constructor(private readonly solidityParserService: SolidityParserService) {}

  @Get('/analyze')
  analyze(): string {
    return 'Hello world';
  }
}
