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
  nombre_coleccion: string = '';
  coleccion = { nombre: '', titulo: '', header: '', texto: '' };
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
