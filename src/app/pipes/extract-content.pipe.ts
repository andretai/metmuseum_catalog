import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractContent'
})
export class ExtractContentPipe implements PipeTransform {

  transform(jsonString: string, property: string): unknown {
    let jsonObj = JSON.parse(jsonString);
    return jsonObj[property];
  }

}
