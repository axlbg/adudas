import { Component } from '@angular/core';

@Component({
  selector: 'app-adudas',
  templateUrl: './adudas.component.html',
  styleUrls: ['./adudas.component.css'],
})
export class AdudasComponent {
  abierto: boolean[] = [];

  clickArrow(index: number) {
    this.abierto[index] = !this.abierto[index];
  }
}
