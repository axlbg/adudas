import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-adudas',
  templateUrl: './adudas.component.html',
  styleUrls: ['./adudas.component.css'],
})
export class AdudasComponent implements OnInit {
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

  constructor(
    private route: ActivatedRoute,
    private productos: ProductosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['filter'] == 'oportunidades') {
        this.filtros.push('40% OFF');
      } else {
        let paramCapitalizado = this.capitalizeFirstLetter(params['filter']);
        if (
          this.categorias.includes(paramCapitalizado) ||
          this.generos.includes(paramCapitalizado) ||
          this.deportes.includes(paramCapitalizado)
        )
          this.filtros.push(paramCapitalizado);
        paramCapitalizado = this.capitalizeFirstLetter(params['filter2']);
        if (
          this.categorias.includes(paramCapitalizado) ||
          this.generos.includes(paramCapitalizado) ||
          this.deportes.includes(paramCapitalizado)
        )
          this.filtros.push(paramCapitalizado);
      }
    });
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
    let todosLosProductos = this.productos.traerProductos();

    if (filtrosLength > 0) {
      todosLosProductos.forEach((p: any) => {
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
    } else filtrados = todosLosProductos;

    return filtrados;
  }

  limpiarFiltros() {
    this.filtros = [];
    this.productosFiltrados = this.obtenerFiltrados();
  }

  private capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
