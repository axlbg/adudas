import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  items: Number[] = [];
  constructor() {}

  traerItems() {
    return this.items;
  }

  agregarItem(item: any) {
    this.items.push(item);
  }

  removerItemPorId(id: number) {
    let newArray: any = [];
    this.items.forEach((i) => {
      if (i != id) newArray.push(newArray[i]);
    });
    return newArray;
  }
}
