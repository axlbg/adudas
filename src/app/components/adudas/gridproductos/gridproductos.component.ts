import { Component } from '@angular/core';
import jsonProductos from '../../../../assets/productos.json';

@Component({
  selector: 'app-gridproductos',
  templateUrl: './gridproductos.component.html',
  styleUrls: ['./gridproductos.component.css'],
})
export class GridproductosComponent {
  productos: any = new Array();

  constructor() {
    jsonProductos.forEach((p) => {
      this.productos.push(p);
    });
  }

  calcularDescuento(precio: number, descuento: number) {
    return Math.round(precio - precio * (descuento / 100));
  }
}
