import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsonColecciones from '../../../../assets/colecciones.json';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-coleccion',
  templateUrl: './coleccion.component.html',
  styleUrls: ['./coleccion.component.css'],
})
export class ColeccionComponent {
  isDragging = false;
  startX = 0;
  startScrollLeft = 0;

  dragStop = () => {
    this.isDragging = false;
    document.getElementById('carro')!.classList.remove('dragging');
  };

  clickIzq() {
    document.getElementById('carro')!.scrollLeft -= 300;
  }
  clickDer() {
    document.getElementById('carro')!.scrollLeft += 300;
  }

  dragStart = (e: MouseEvent) => {
    let carro = document.getElementById('carro');
    this.isDragging = true;
    carro!.classList.add('dragging');

    this.startX = e.pageX;
    this.startScrollLeft = carro!.scrollLeft;
  };

  dragging = (e: MouseEvent) => {
    if (!this.isDragging) return;
    document.getElementById('carro')!.scrollLeft =
      this.startScrollLeft - (e.pageX - this.startX);
  };

  nombre_coleccion: string = '';
  coleccion = { nombre: '', header: '' };
  productosFiltradosPorColeccion: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pService: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.nombre_coleccion = params['nombre'];
    });
    jsonColecciones.forEach((c) => {
      if (c.nombre == this.nombre_coleccion) {
        this.coleccion = c;
        return;
      }
    });
    this.pService.traerProductos().forEach((p) => {
      if (p.coleccion == this.nombre_coleccion)
        this.productosFiltradosPorColeccion.push(p);
    });
  }
}
