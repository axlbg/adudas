import { Injectable } from '@angular/core';
import jsonProductos from '../../assets/productos.json';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  todosLosProductos;

  constructor() {
    this.todosLosProductos = jsonProductos;
  }

  traerProductos() {
    return this.todosLosProductos;
  }

  traerPorId(index: number) {
    let productoReturn;
    this.todosLosProductos.forEach((p) => {
      if (p.id == index) productoReturn = p;
    });
    return productoReturn;
  }
}
