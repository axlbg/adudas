import { Component } from '@angular/core';

@Component({
  selector: 'app-adudas',
  templateUrl: './adudas.component.html',
  styleUrls: ['./adudas.component.css'],
})
export class AdudasComponent {
  abierto: boolean[] = [false, true, true, true, true];
  descuentos: string[] = ['40% OFF', '30% OFF', '20% OFF'];
  categorias: string[] = [
    'Buzo',
    'Calzado',
    'Camiseta',
    'Campera',
    'Gorra',
    'Guante',
    'Mochila',
  ];
  generos: string[] = ['Hombre', 'Mujer', 'Niño', 'Unisex'];
  deportes: string[] = ['Futbol', 'Basquet', 'Skate', 'Yoga', 'Running'];

  filtros: string[] = [];

  clickItem(index: number) {
    this.abierto[index] = !this.abierto[index];
  }
  checkButton(text: string) {
    if (this.filtros.includes(text))
      this.filtros.splice(this.filtros.indexOf(text), 1);
    else this.filtros.push(text);
  }
}
