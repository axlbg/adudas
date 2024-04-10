import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  productosFiltrados: any[] = [];

  constructor(private pService: ProductosService) {}

  ngOnInit() {
    this.pService.traerProductos().forEach((p) => {
      if (p.nuevo) this.productosFiltrados.push(p);
    });
  }
}
