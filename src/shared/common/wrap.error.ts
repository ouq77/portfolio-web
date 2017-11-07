import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {WrappedError} from '../definitions/wrapped.error';

export const wrapError = (err: HttpErrorResponse): Observable<WrappedError> => {
  const wrappedError: WrappedError = {
    content: err.error || err.message,
    status: err.status,
  };
  console.warn(`${wrappedError.status}: ${(wrappedError.content && JSON.stringify(wrappedError.content) || '-')}`);

  return Observable.throw(wrappedError);
};
