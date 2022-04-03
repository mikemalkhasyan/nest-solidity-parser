import { ApiProperty } from '@nestjs/swagger';

export class AnalyzeFormParamsDTO {
  @ApiProperty({
    required: true,
    example:
      "import 'VarysContractBase.sol'; import 'VarysContractExtras.sol'; contract VarysContract { mapping (uint => address) public addresses; }",
  })
  code: string;
}
