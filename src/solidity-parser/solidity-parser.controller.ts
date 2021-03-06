import { Body, Controller, Post, HttpStatus, Res } from '@nestjs/common';
import { ApiInternalServerErrorResponse, ApiOkResponse } from '@nestjs/swagger';
import { Response } from 'express';
import * as Parser from '@solidity-parser/parser';

import {
  AnalyzeFormParamsDTO,
  AnalyzeSuccessResponseDTO,
  AnalyzeInternalErrorResponseDTO,
} from '../common/interfaces/dto';
import { APICommonResponse } from '../common/interfaces/api-common-respone.interface';
import { ISolidityParserResponse } from '../common/interfaces/solidity-parser';
import { internalErrorResponseMaker } from '../common/utils/error-response-maker';
import { SolidityParserService } from './solidity-parser.service';
import { SOLIDITY_PARSER_ACTION_STATUS } from '../common/interfaces/messages/solidity-parser/index.enum';

@Controller('/')
export class SolidityParserController {
  constructor(private readonly service: SolidityParserService) {}

  @ApiOkResponse({
    type: AnalyzeSuccessResponseDTO,
  })
  @ApiInternalServerErrorResponse({
    type: AnalyzeInternalErrorResponseDTO,
  })
  @Post('/analyze')
  async analyze(
    @Body() body: AnalyzeFormParamsDTO,
    @Res() res: Response,
  ): Promise<void> {
    const solidityCode = body.code;
    let result: APICommonResponse<ISolidityParserResponse>;

    try {
      const ast = Parser.parse(solidityCode);
      const parsedValidData = this.service.convertSolidityObject(ast);

      res.status(HttpStatus.OK);
      result = {
        status: HttpStatus.OK,
        message: SOLIDITY_PARSER_ACTION_STATUS.ANALYZE_SOLIDITY_PARSER_SUCCESS,
        data: parsedValidData,
        error: null,
      };
    } catch (e) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      result = internalErrorResponseMaker(e);
    }

    await res.json(result);
  }
}
