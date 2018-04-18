import { Pipe, PipeTransform } from '@angular/core';
import { format } from '../functions';

@Pipe({
    name: 'fsDateFormat'
})
export class FsDateFormatPipe implements PipeTransform {

    transform(value: any, fmt?: String): String {
      return format(value, fmt);
    }
}