import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public cService: CarritoService) {}

  clickCerrarMenu() {
    document.getElementById('header')!.style.transform = 'translateX(-450px)';
    document.getElementById('header')!.style.boxShadow = '0 0 0';
  }
  clickOpenMenu() {
    document.getElementById('header')!.style.transform = 'translateX(0)';
    document.getElementById('header')!.style.boxShadow =
      '0 0 15px rgb(0, 0, 0, 0.5)';
  }
}
