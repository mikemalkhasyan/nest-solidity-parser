import { Module } from '@nestjs/common';
import { SolidityParserService } from './solidity-parser.service';
import { SolidityParserController } from './solidity-parser.controller';

@Module({
  controllers: [SolidityParserController],
  providers: [SolidityParserService],
})
export class SolidityParserModule {}
