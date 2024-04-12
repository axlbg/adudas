import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  items: number[] = [];
  constructor() {}

  traerItems() {
    return this.items;
  }

  agregarItem(id: any) {
    this.items.push(id);
  }

  removerItemPorId(id: number) {
    let newArray: any = [];
    this.items.forEach((i) => {
      if (i != id) newArray.push(i);
    });
    this.items = newArray;
  }

  cantidadDeItems() {
    return this.items.length;
  }
}
