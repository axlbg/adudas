import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css'],
})
export class VerComponent {
  id_producto = undefined;
  constructor(
    private route: ActivatedRoute,
    private productoService: ProductosService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id_producto = this.productoService.traerPorId(params['id']);
    });
  }
}
