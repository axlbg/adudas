import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gridproductos',
  templateUrl: './gridproductos.component.html',
  styleUrls: ['./gridproductos.component.css'],
})
export class GridproductosComponent {
  @Input() productos: any[] = [];

  constructor() {}

  calcularDescuento(precio: number, descuento: number) {
    return Math.round(precio - precio * (descuento / 100));
  }
}
