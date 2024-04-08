import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css'],
})
export class MostrarProductoComponent {
  @Input() public p = {
    nombre: 'Sherman veniam',
    descripcion: 'Guantes para aterrizar mejor',
    precio: 471939,
    balances: '$96000',
    genero: 'niño',
    descuento: 30,
    imagen: '../../../assets/productos/imagenes/1.jpg',
    tipo: 'guante',
    deporte: 'skate',
    nuevo: false,
  };

  calcularDescuento(precio: number, descuento: number) {
    return Math.round(precio - precio * (descuento / 100));
  }
}
