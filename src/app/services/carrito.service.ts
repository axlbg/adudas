import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  items: any[] = [];

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

  constructor() {}

  traerItems() {
    return this.items;
  }

  agregarItem(p: any) {
    let nuevoProducto: any;
    nuevoProducto = {
      id: p.id,
      img: p.imagen,
      nombre: p.nombre,
      cantidad: 1,
      precio: p.precio,
      descuento: p.descuento,
    };
    this.items.push(nuevoProducto);
  }

  removerItemPorId(id: number) {
    let newArray: any = [];
    this.items.forEach((i) => {
      if (i != id) newArray.push(i);
    });
    this.items = newArray;
  }

  cantidadDeItems() {
    return this.items.length;
  }
}
