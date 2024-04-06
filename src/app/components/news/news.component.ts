import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  arrowBtns = document.querySelectorAll('.wrapper button');

  clickIzq() {
    document.getElementById('carro')!.scrollLeft -= 100;
  }
  clickDer() {
    document.getElementById('carro')!.scrollLeft += 100;
  }
}
