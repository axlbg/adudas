import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdudasComponent } from './components/adudas/adudas/adudas.component';
import { MainComponent } from './components/main/main.component';
import { VerComponent } from './components/pages/ver/ver.component';
import { ColeccionComponent } from './components/pages/coleccion/coleccion.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'adudas', component: AdudasComponent },
  { path: 'adudas/:filter', component: AdudasComponent },
  { path: 'adudas/:filter/:filter2', component: AdudasComponent },
  { path: 'ver/:id', component: VerComponent },
  { path: 'coleccion/:nombre', component: ColeccionComponent },
  { path: 'checkout', component: CheckoutComponent },
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
