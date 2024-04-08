import { Component } from '@angular/core';
import jsonProductos from '../../../../assets/productos.json';

@Component({
  selector: 'app-gridproductos',
  templateUrl: './gridproductos.component.html',
  styleUrls: ['./gridproductos.component.css'],
})
export class GridproductosComponent {
  productos: any = new Array();
  filtros: string[] = ['buzo', 'guante'];

  constructor() {
    jsonProductos.forEach((p) => {
      this.productos.push(p);
    });
    this.productos = this.obtenerFiltrados();
  }

  calcularDescuento(precio: number, descuento: number) {
    return Math.round(precio - precio * (descuento / 100));
  }

  obtenerFiltrados() {
    let filtrados: any[] = [];
    this.productos.forEach((p: any) => {
      this.filtros.forEach((f: any) => {
        if (p.tipo == f) {
          filtrados.push(p);
        }
      });
    });

    return filtrados;
  }
}
