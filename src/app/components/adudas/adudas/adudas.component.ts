import { Component } from '@angular/core';

@Component({
  selector: 'app-adudas',
  templateUrl: './adudas.component.html',
  styleUrls: ['./adudas.component.css'],
})
export class AdudasComponent {
  abierto: boolean[] = [];
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

  clickItem(index: number) {
    this.abierto[index] = !this.abierto[index];
  }
}
