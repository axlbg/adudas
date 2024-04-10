import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css'],
})
export class VerComponent {
  producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    genero: '',
    descuento: 0,
    imagen: '',
    galeria: ['', ''],
    tipo: '',
    deporte: '',
    nuevo: false,
  };
  productosPromo: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (this.productoService.traerPorId(params['id']) != undefined) {
        this.producto = this.productoService.traerPorId(params['id']);
      }
    });

    this.productosPromo = this.productoService.traerRandom();
  }

  calcularDescuento(precio: number, descuento: number) {
    return Math.round(precio - precio * (descuento / 100));
  }

  comprarAhora() {
    alert('compraste');
  }

  agregarAlCarrito() {
    alert('agregar carro');
  }
}
