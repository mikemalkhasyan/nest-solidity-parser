import { APICommonResponse } from '../../interfaces/api-common-respone.interface';
import { HttpStatus } from '@nestjs/common';
import { COMMON_ACTION_STATUS } from '../../interfaces/messages/index.enum';

export const internalErrorResponseMaker = (e): APICommonResponse<null> => {
  let errorMessage;
  if (typeof e === 'string') {
    errorMessage = e;
  } else if (typeof e === 'object' && e.message) {
    errorMessage = e.message;
  } else {
    errorMessage = 'Internal server error';
  }

  return {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    message: COMMON_ACTION_STATUS.INTERNAL_ERROR,
    data: null,
    error: errorMessage,
  };
};
