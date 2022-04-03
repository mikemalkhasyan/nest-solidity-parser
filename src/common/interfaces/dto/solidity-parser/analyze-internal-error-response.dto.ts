import { ApiProperty } from '@nestjs/swagger';
import { ISolidityParserResponse } from '../../solidity-parser';

export class AnalyzeInternalErrorResponseDTO {
  @ApiProperty({
    example: 500,
  })
  status: number;

  @ApiProperty({
    example: 'analyze_solidity_parser_internal_error',
  })
  message: string;

  @ApiProperty({
    example: null,
    nullable: true,
  })
  data: ISolidityParserResponse;

  @ApiProperty({
    example: 'Something went wrong!',
    nullable: true,
  })
  error: string;
}
