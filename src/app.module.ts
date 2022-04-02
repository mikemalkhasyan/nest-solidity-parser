import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SolidityParserModule } from './solidity-parser/solidity-parser.module';

@Module({
  imports: [SolidityParserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
