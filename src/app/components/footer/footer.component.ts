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
        { text: 'Envíos y entregas', href: '/adudas/novedades' },
        { text: 'Devoluciones', href: '/adudas/hombres' },
        { text: 'Cambios', href: '/adudas/niños' },
        { text: 'Contactarse', href: '/adudas/oportunidades' },
      ],
    },
    {
      titulo: 'ACERCA DE',
      items: [
        { text: 'Noticias', href: '/adudas/hombres' },
        { text: 'Inversionistas', href: '/adudas/niños' },
        { text: 'Terminos y condiciones', href: '/adudas/oportunidades' },
      ],
    },
    {
      titulo: 'NOVEDADES',
      items: [
        { text: 'Lo nuevo', href: '/adudas/novedades' },
        { text: 'Hombres', href: '/adudas/hombres' },
        { text: 'Mujeres', href: '/adudas/mujeres' },
        { text: 'Niños', href: '/adudas/niños' },
        { text: 'Promociones', href: '/adudas/oportunidades' },
      ],
    },
  ];
}
