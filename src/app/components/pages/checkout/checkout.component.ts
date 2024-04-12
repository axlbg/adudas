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
  // productosDelCarro: any[] = [];
  resumen_subtotal = 0;
  resumen_descuento = 0;
  resumen_total = 0;

  constructor(
    private carritoService: CarritoService,
    private pService: ProductosService
  ) {}

  ngOnInit() {
    this.inicializarProductos();
  }

  removerProducto(id: number) {
    this.carritoService.removerItemPorId(id);
    this.inicializarProductos();
  }

  private inicializarProductos() {
    let nuevoProducto;
    let placeholder;
    this.productosDelCarro = [];
    this.resumen_descuento = 0;
    this.resumen_subtotal = 0;
    this.resumen_total = 0;

    this.carritoService.traerItems().forEach((id) => {
      placeholder = this.pService.traerPorId(id);
      nuevoProducto = {
        id: id,
        img: placeholder.imagen,
        nombre: placeholder.nombre,
        cantidad: 1,
        precio: placeholder.precio,
        descuento: placeholder.descuento,
      };
      this.productosDelCarro.push(nuevoProducto);
      this.resumen_subtotal += nuevoProducto.precio;
      this.resumen_descuento +=
        nuevoProducto.precio * (nuevoProducto.descuento / 100);
      this.resumen_total = this.resumen_subtotal - this.resumen_descuento;
    });
  }

  private ordenarDuplicados() {}
}
