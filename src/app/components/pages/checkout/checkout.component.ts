import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  productosDelCarro: any[] = [
    {
      img: '/assets/productos/imagenes/13.jpg',
      nombre: 'Nike Sportswear Sport',
      cantidad: 1,
      precio: 43000,
    },
    {
      img: '/assets/productos/imagenes/14.jpg',
      nombre: 'Nike Pro Talle: XS Color: Negro',
      cantidad: 2,
      precio: 3000,
    },
    {
      img: '/assets/productos/imagenes/15.jpg',
      nombre: 'Nike Pro Talle: XS Color: Negro',
      cantidad: 2,
      precio: 3000,
    },
  ];
  proba=1;
}
