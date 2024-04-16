import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  columnas = [
    {
      titulo: 'AYUDA',
      items: [
        { text: 'Envíos y entregas', href: '/' },
        { text: 'Devoluciones', href: '/' },
        { text: 'Contactarse', href: '/' },
      ],
    },
    {
      titulo: 'ACERCA DE',
      items: [
        { text: 'Noticias', href: '/' },
        { text: 'Inversionistas', href: '/' },
        { text: 'Terminos y condiciones', href: '/terminos-y-condiciones' },
      ],
    },
    {
      titulo: 'NOVEDADES',
      items: [
        { text: 'Lo nuevo', href: '/adudas/novedades' },
        { text: 'Hombres', href: '/adudas/hombre' },
        { text: 'Mujeres', href: '/adudas/mujer' },
        { text: 'Niños', href: '/adudas/niño' },
        { text: 'Promociones', href: '/adudas/oportunidades' },
      ],
    },
  ];
}
