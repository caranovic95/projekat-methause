import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'houses'
})
export class HousesPipe implements PipeTransform {

  transform(value: Object[], povrsina: string, cena: number): Object[] {
    if (value == null) {
      return null;
    }

    if (povrsina !== undefined || cena !== undefined) {
      if (povrsina == undefined) {
        return value.filter((item: Object) => item["cena"] >= cena);
      }
      else if (cena == undefined){
        return value.filter((item: Object) => item["povrsina"].includes(povrsina));
      }

      return value.filter(
        (item: Object) => item["cena"] >= cena && item["povrsina"] >= povrsina);
    } else {
      return value;
    }
  }

}
