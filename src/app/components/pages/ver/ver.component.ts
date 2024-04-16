import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
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
  addedBool = false;

  router = inject(Router);

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductosService,
    private cService: CarritoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (this.productoService.traerPorId(params['id']) != undefined) {
        this.producto = this.productoService.traerPorId(params['id']);
        this.addedBool = false;
      }
    });

    this.productosPromo = this.productoService.traerRandom();
  }

  calcularDescuento(precio: number, descuento: number) {
    return Math.round(precio - precio * (descuento / 100));
  }

  comprarAhora() {
    if (!this.cService.estaEnElCarro(this.producto.id)) {
      this.cService.agregarItem(this.producto);
    }
    this.router.navigate(['/checkout']);
  }

  agregarAlCarrito() {
    this.cService.agregarItem(this.producto);
    this.addedBool = true;
  }
}
