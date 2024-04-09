import { Injectable } from '@angular/core';
import jsonProductos from '../../assets/productos.json';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor() {}

  traerProductos() {
    return jsonProductos;
  }
}
