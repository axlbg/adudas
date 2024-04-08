import { Component, Input } from '@angular/core';
import jsonProductos from '../../../../assets/productos.json';

@Component({
  selector: 'app-gridproductos',
  templateUrl: './gridproductos.component.html',
  styleUrls: ['./gridproductos.component.css'],
})
export class GridproductosComponent {
  @Input() public filtros: string[] = [];

  productos: any = new Array();

  constructor() {
    this.productos = this.obtenerFiltrados();
  }

  calcularDescuento(precio: number, descuento: number) {
    return Math.round(precio - precio * (descuento / 100));
  }

  obtenerFiltrados() {
    let filtrados: any[] = [];

    if (this.filtros.length > 0) {
      jsonProductos.forEach((p: any) => {
        this.filtros.forEach((f: any) => {
          if (p.tipo == f || p.genero == f || p.deporte == f) {
            filtrados.push(p);
          } else if (f == 'Novedades' && p.nuevo) {
            filtrados.push(p);
          } else if (f[2] == '%' && f.substr(0, 2) == p.descuento) {
            filtrados.push(p);
          }
        });
      });
    } else filtrados = jsonProductos;

    return filtrados;
  }
}
