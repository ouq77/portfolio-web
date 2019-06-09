import { HttpErrorResponse } from '@angular/common/http';
import { WrappedError } from '../definitions/wrapped.error';

export const wrapError = (err: HttpErrorResponse): WrappedError => {
  const wrappedError: WrappedError = {
    content: err.error || err.message,
    status: err.status,
  };
  console.warn(`${wrappedError.status}: ${(wrappedError.content && JSON.stringify(wrappedError.content) || '-')}`);

  return wrappedError;
};
