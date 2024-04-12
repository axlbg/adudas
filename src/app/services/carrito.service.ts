import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  items: any[] = [];

  resumen_subtotal = 0;
  resumen_descuento = 0;
  resumen_total = 0;

  constructor() {}

  traerItems() {
    return this.items;
  }

  agregarItem(p: any) {
    if (this.comprobarDuplicado(p.id)) {
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
    this.calcularResumen();
  }

  removerItemPorId(id: number) {
    let newArray: any = [];
    this.items.forEach((i) => {
      if (i.id != id) newArray.push(i);
    });
    this.items = newArray;
    this.calcularResumen();
  }

  cantidadDeItems() {
    return this.items.length;
  }

  aumentarCantidadPorId(id: number) {
    this.items.forEach((i) => {
      if (i.id == id) {
        i.cantidad += 1;
        return;
      }
    });
    this.calcularResumen();
  }

  restarCantidadPorId(id: number) {
    this.items.forEach((i) => {
      if (i.id == id) {
        if (i.cantidad > 1) i.cantidad -= 1;
        return;
      }
    });
    this.calcularResumen();
  }

  estaEnElCarro(id: number) {
    let retorno = false;
    this.items.forEach((i) => {
      if (i.id == id) {
        retorno = true;
        return;
      }
    });
    return retorno;
  }

  private comprobarDuplicado(id: number) {
    let retorno = true;
    if (this.estaEnElCarro(id)) {
      this.aumentarCantidadPorId(id);
      retorno = false;
    }
    return retorno;
  }

  private calcularResumen() {
    this.resumen_subtotal = 0;
    this.resumen_descuento = 0;
    this.resumen_total = 0;
    this.items.forEach((i) => {
      this.resumen_subtotal += i.precio * i.cantidad;
      this.resumen_descuento += i.precio * (i.descuento / 100) * i.cantidad;
      this.resumen_total = this.resumen_subtotal - this.resumen_descuento;
    });
  }
}
