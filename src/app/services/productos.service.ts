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
    let productoReturn = {
      id: 0,
      nombre: '',
      descripcion: '',
      precio: 0,
      genero: '',
      descuento: 0,
      imagen: '',
      galeria: ['', ''],
      tipo: '',
      deporte: '',
      nuevo: false,
    };
    this.todosLosProductos.forEach((p) => {
      if (p.id == index) productoReturn = p;
    });
    return productoReturn;
  }

  traerRandom() {
    let productosReturn: any[] = [];
    this.todosLosProductos.forEach((p) => {
      if (Math.random() > 0.7) productosReturn.push(p);
    });
    return productosReturn;
  }
}
