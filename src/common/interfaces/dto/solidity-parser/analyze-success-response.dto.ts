import { ApiProperty } from '@nestjs/swagger';
import { ISolidityParserResponse } from '../../solidity-parser';
import { SOLIDITY_PARSER_ACTION_STATUS } from '../../messages/solidity-parser/index.enum';

export class AnalyzeSuccessResponseDTO {
  @ApiProperty({
    example: 200,
  })
  status: number;

  @ApiProperty({
    example: SOLIDITY_PARSER_ACTION_STATUS.ANALYZE_SOLIDITY_PARSER_SUCCESS,
  })
  message: string;

  @ApiProperty({
    example: {
      imports: ['VarysContractBase.sol', 'VarysContractExtras.sol'],
      contracts: ['VarysContract'],
    },
  })
  data: ISolidityParserResponse;

  @ApiProperty({
    example: null,
    nullable: true,
  })
  error: string;
}
