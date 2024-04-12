import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  productosDelCarro: any[] = [
    {
      id: 13,
      img: '/assets/productos/imagenes/13.jpg',
      nombre: 'Nike Sportswear Sport',
      cantidad: 1,
      precio: 43000,
      descuento: 20,
    },
  ];

  constructor(public carritoService: CarritoService) {}

  removerProducto(id: number) {
    this.carritoService.removerItemPorId(id);
  }

  aumentarCantidad(id: number) {
    this.carritoService.aumentarCantidadPorId(id);
  }

  restarCantidad(id: number) {
    this.carritoService.restarCantidadPorId(id);
  }
}
