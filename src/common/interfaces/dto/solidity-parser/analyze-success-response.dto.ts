import { ApiProperty } from '@nestjs/swagger';
import { ISolidityParserResponse } from '../../solidity-parser';

export class AnalyzeSuccessResponseDTO {
  @ApiProperty({
    example: 200,
  })
  status: number;

  @ApiProperty({
    example: 'analyze_solidity_parser_success',
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
