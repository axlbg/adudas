import { Component } from '@angular/core';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css'],
})
export class PublicidadComponent {
  x = 0;
  mensajes = [
    {
      texto: 'Envío gratis en muchísimos productos',
      a: 'Ver cuáles',
      href: '/adudas',
    },
    {
      texto: 'Algunos productos pueden no ser lo que parece',
      a: 'Ver terminos y condiciones',
      href: '#',
    },
    {
      texto: 'Tenemos la ropa de Messi',
      a: 'Ver colección',
      href: '/coleccion/messi',
    },
  ];

  clickArrowLeft() {
    this.x -= 1;
    if (this.x < 0) {
      this.x = this.mensajes.length - 1;
    }
  }
  clickArrowRight() {
    this.x += 1;
    if (this.x >= this.mensajes.length) {
      this.x = 0;
    }
  }
}
