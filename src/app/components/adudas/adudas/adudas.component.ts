import { Component } from '@angular/core';
import jsonProductos from '../../../../assets/productos.json';

@Component({
  selector: 'app-adudas',
  templateUrl: './adudas.component.html',
  styleUrls: ['./adudas.component.css'],
})
export class AdudasComponent {
  abierto: boolean[] = [false, true, true, true, true];
  descuentos: string[] = ['40% OFF', '30% OFF', '20% OFF'];
  categorias: string[] = [
    'Buzo',
    'Calzado',
    'Camiseta',
    'Campera',
    'Gorra',
    'Guante',
    'Mochila',
  ];
  generos: string[] = ['Hombre', 'Mujer', 'Niño', 'Unisex'];
  deportes: string[] = ['Futbol', 'Basquet', 'Skate', 'Yoga', 'Running'];

  filtros: string[] = [];
  productosFiltrados: any[] = [];

  constructor() {
    this.productosFiltrados = this.obtenerFiltrados();
  }

  clickItem(index: number) {
    this.abierto[index] = !this.abierto[index];
  }
  checkButton(text: string) {
    if (this.filtros.includes(text))
      this.filtros.splice(this.filtros.indexOf(text), 1);
    else this.filtros.push(text);
    this.productosFiltrados = this.obtenerFiltrados();
  }

  obtenerFiltrados() {
    let filtrados: any[] = [];
    let fToLowerCase;
    let filtrosLength = this.filtros.length;
    let contadorDeCualidades = 0;

    if (filtrosLength > 0) {
      jsonProductos.forEach((p: any) => {
        this.filtros.forEach((f: any) => {
          if (f[2] == '%') {
            if (f.substr(0, 2) == p.descuento) contadorDeCualidades++;
          } else {
            fToLowerCase = f.toLowerCase();
            if (
              p.tipo == fToLowerCase ||
              p.genero == fToLowerCase ||
              p.deporte == fToLowerCase
            ) {
              contadorDeCualidades++;
            } else if (f == 'Novedades' && p.nuevo) {
              contadorDeCualidades++;
            }
          }
        });
        if (contadorDeCualidades == filtrosLength) {
          filtrados.push(p);
        }
        contadorDeCualidades = 0;
      });
    } else filtrados = jsonProductos;

    return filtrados;
  }

  limpiarFiltros() {
    this.filtros = [];
    this.productosFiltrados = this.obtenerFiltrados();
  }
}
