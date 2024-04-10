import { Component } from '@angular/core';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css'],
})
export class PublicidadComponent {
  mensaje = {
    texto: 'Hasta 6 cuotas sin interés con bancos seleccionados',
    a: 'Ver promociones bancarias',
    href: '#',
  };
}
