import { SECONDS } from '../constants/seconds';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

export function parse(value: string): Observable<Object> {

  let time = 0;

  if (!value && typeof value !== 'string') {
    return of({error: 'Invalid duration format'});
  }

  value = value
    .trim()
    .replace(/(\d+)\s+/g,'$1')
    .replace(/\s+/,' ')
    .replace(/^\./,'0.');

  value.split(' ').forEach((chunk) => {

    const matches = chunk.match(/^(\d+\.?\d*)([YMdhms])$/);

    if (!matches) {
      return;
    }

    const factor = {
      Y: SECONDS.YEAR,
      M: SECONDS.MONTH,
      d: SECONDS.DAY,
      h: SECONDS.HOUR,
      m: SECONDS.MINUTE,
      s: 1
    }[matches[2]];

    time += +matches[1] * factor;
  });

  return of({time: time});
}
