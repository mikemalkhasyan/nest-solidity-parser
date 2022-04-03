export interface ISolidityParserResponse {
  imports: Array<string>;
  contracts: Array<string>;
}

export interface IPathLiteral {
  type: string;
  value: string;
  parts: Array<string>;
  isUnicode: Array<boolean>;
}

export interface ISubNodes {
  type: string;
  variable: Array<any>;
  initialValue: null;
}

export interface ISolidityParseChildren {
  type: string;
  name?: string;
  path?: string;
  pathLiteral?: IPathLiteral;
  unitAlias?: null;
  unitAliasIdentifier?: null;
  symbolAliases?: null;
  symbolAliasesIdentifiers?: null;
  baseContracts?: Array<any>;
  subNodes?: Array<ISubNodes>;
  kind?: string;
}

export interface ISolidityParseBody {
  type: string;
  children: Array<ISolidityParseChildren>;
}
