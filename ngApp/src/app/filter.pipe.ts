import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
 // using yhe pipe to sort my cameraChoice
export class FilterPipe implements PipeTransform {

  transform(array: any[], searchText: string[]): any[] { //I define two table for my sort result one for the placePhoto and one for markCamera
  
    if(!array) return [];

    if(!searchText[0] && !searchText[1]) return array;

    searchText[0] = searchText[0];
    searchText[1] = searchText[1];

    return array.filter( items => {
      if (searchText[0]) {
        return items.placePhoto.includes(searchText[0]); 
      }
      if (searchText[1]) {
        return items.markCamera.includes(searchText[1]);
      }
    });

  }

}
