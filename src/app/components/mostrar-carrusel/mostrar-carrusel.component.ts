import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-carrusel',
  templateUrl: './mostrar-carrusel.component.html',
  styleUrls: ['./mostrar-carrusel.component.css'],
})
export class MostrarCarruselComponent {
  isDragging = false;
  startX = 0;
  startScrollLeft = 0;
  @Input() public texto: string = '';
  @Input() public productos: any = new Array();

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
