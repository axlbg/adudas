import { Component } from '@angular/core';

@Component({
  selector: 'app-deportes',
  templateUrl: './deportes.component.html',
  styleUrls: ['./deportes.component.css'],
})
export class DeportesComponent {
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
}
