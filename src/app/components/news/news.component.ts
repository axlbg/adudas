import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
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
    let carousel = document.getElementById('carro');
    this.isDragging = true;
    carousel!.classList.add('dragging');

    this.startX = e.pageX;
    this.startScrollLeft = carousel!.scrollLeft;
  };

  dragging = (e: MouseEvent) => {
    if (!this.isDragging) return;
    document.getElementById('carro')!.scrollLeft =
      this.startScrollLeft - (e.pageX - this.startX);
  };
}
