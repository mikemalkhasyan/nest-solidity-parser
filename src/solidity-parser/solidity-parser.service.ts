import { Injectable } from '@nestjs/common';
import { SolidityParserHelperService } from './services/solidity-parser.helper.service';
import { ISolidityParserResponse } from '../common/interfaces/solidity-parser';

@Injectable()
export class SolidityParserService {
  constructor(private readonly helper: SolidityParserHelperService) {}

  convertSolidityObject(solidityInstance): ISolidityParserResponse {
    const collection: ISolidityParserResponse = {
      imports: [],
      contracts: [],
    };

    const solidityItems = solidityInstance.children;

    for (const solidityItem of solidityItems) {
      if (solidityItem.type === this.helper.SOLIDITY_IMPORT_DIRECTIVE) {
        collection.imports.push(solidityItem.path);
      }

      if (solidityItem.type === this.helper.SOLIDITY_CONTRACT_DEFINITION) {
        collection.contracts.push(solidityItem.name);
      }
    }

    return collection;
  }
}
