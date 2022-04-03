import { Module } from '@nestjs/common';
import { SolidityParserService } from './solidity-parser.service';
import { SolidityParserController } from './solidity-parser.controller';
import { SolidityParserHelperService } from './services/solidity-parser.helper.service';

@Module({
  controllers: [SolidityParserController],
  providers: [SolidityParserHelperService, SolidityParserService],
})
export class SolidityParserModule {}
