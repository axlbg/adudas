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
      items: ['Envíos y entregas', 'Devoluciones', 'Cambios', 'Contactarse'],
    },
    {
      titulo: 'ACERCA DE',
      items: ['Noticias', 'Inversionistas', 'Terminos y condiciones'],
    },
    {
      titulo: 'NOVEDADES',
      items: ['Lo nuevo', 'Hombres', 'Mujeres', 'Niños', 'Promociones'],
    },
  ];
}
