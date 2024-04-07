import { Component } from '@angular/core';
import jsonProductos from '../../../assets/productos.json';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  isDragging = false;
  startX = 0;
  startScrollLeft = 0;
  productos: any = new Array();

  constructor() {
    jsonProductos.forEach((p) => {
      if (p.nuevo) this.productos.push(p);
    });
  }

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
}
