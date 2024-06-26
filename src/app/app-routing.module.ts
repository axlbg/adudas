import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdudasComponent } from './components/adudas/adudas/adudas.component';
import { MainComponent } from './components/main/main.component';
import { VerComponent } from './components/pages/ver/ver.component';
import { ColeccionComponent } from './components/pages/coleccion/coleccion.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { PagoComponent } from './components/pages/pago/pago.component';
import { TerminosYCondicionesComponent } from './components/pages/terminos-y-condiciones/terminos-y-condiciones.component';
import { DevolucionesComponent } from './components/pages/devoluciones/devoluciones.component';
import { NoticiasComponent } from './components/pages/noticias/noticias.component';
import { SuscribirseComponent } from './components/pages/suscribirse/suscribirse.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'adudas', component: AdudasComponent },
  { path: 'adudas/:filter', component: AdudasComponent },
  { path: 'adudas/:filter/:filter2', component: AdudasComponent },
  { path: 'ver/:id', component: VerComponent },
  { path: 'coleccion/:nombre', component: ColeccionComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'terminos-y-condiciones', component: TerminosYCondicionesComponent },
  { path: 'devoluciones', component: DevolucionesComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'suscribirse', component: SuscribirseComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Add options right here
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
