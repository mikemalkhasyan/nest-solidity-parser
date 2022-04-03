import { Body, Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { SolidityParserService } from './solidity-parser.service';
import { AnalyzeFormParamsDTO } from '../common/interfaces/dto';
import { APICommonResponse } from '../common/interfaces/api-common-respone.interface';
import { SolidityParserResponse } from '../common/interfaces/solidity-parser';
import { internalErrorResponseMaker } from '../common/utils/error-response-maker';

@Controller('/')
export class SolidityParserController {
  constructor(private readonly solidityParserService: SolidityParserService) {}

  @Get('/analyze')
  async analyze(
    @Body() body: AnalyzeFormParamsDTO,
    @Res() res: Response,
  ): Promise<void> {
    let result: APICommonResponse<SolidityParserResponse> = {
      status: HttpStatus.OK,
      message: 'response_message',
      data: {
        imports: [],
        contracts: [],
      },
      error: '',
    };

    try {
      // TODO: Implement solidity code parsing logic
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      result = internalErrorResponseMaker(e);
    }

    await res.json(result);
  }
}
