import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionShortener'
})
export class DescriptionShortenerPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 300) {
      value = value.substring(0, 300) + '. . .'
    }
    return value;
  }
}
