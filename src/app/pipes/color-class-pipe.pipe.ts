import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorClassPipe'
})
export class ColorClassPipePipe implements PipeTransform {

  // Created mapping object
  private colorClassMapping = new Map<string, string>([
    ['Green', 'text-green-400'],
    ['Red', 'text-red-400']
  ]);

  transform(data: string): string {
    for (const [key, value] of this.colorClassMapping) {
      if (data.includes(key)) {
        return value;
      }
    }
    return 'text-blue-400';
  }
}
