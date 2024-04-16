import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { ProximamenteComponent } from './components/proximamente/proximamente.component';
import { AirmaxComponent } from './components/airmax/airmax.component';
import { EntrenamientoComponent } from './components/entrenamiento/entrenamiento.component';
import { NewsComponent } from './components/news/news.component';
import { DoblecoleccionComponent } from './components/doblecoleccion/doblecoleccion.component';
import { FooterComponent } from './components/footer/footer.component';
import { OportunidadesComponent } from './components/oportunidades/oportunidades.component';
import { DeportesComponent } from './components/deportes/deportes.component';
import { AdudasComponent } from './components/adudas/adudas/adudas.component';
import { MainComponent } from './components/main/main.component';
import { GridproductosComponent } from './components/adudas/gridproductos/gridproductos.component';
import { MostrarProductoComponent } from './components/mostrar-producto/mostrar-producto.component';
import { VerComponent } from './components/pages/ver/ver.component';
import { ColeccionComponent } from './components/pages/coleccion/coleccion.component';
import { MostrarCarruselComponent } from './components/mostrar-carrusel/mostrar-carrusel.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { PagoComponent } from './components/pages/pago/pago.component';
import { TerminosYCondicionesComponent } from './components/pages/terminos-y-condiciones/terminos-y-condiciones.component';
import { DevolucionesComponent } from './components/pages/devoluciones/devoluciones.component';
import { NoticiasComponent } from './components/pages/noticias/noticias.component';
import { SuscribirseComponent } from './components/pages/suscribirse/suscribirse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublicidadComponent,
    ProximamenteComponent,
    AirmaxComponent,
    EntrenamientoComponent,
    NewsComponent,
    DoblecoleccionComponent,
    FooterComponent,
    OportunidadesComponent,
    DeportesComponent,
    AdudasComponent,
    MainComponent,
    GridproductosComponent,
    MostrarProductoComponent,
    VerComponent,
    ColeccionComponent,
    MostrarCarruselComponent,
    CheckoutComponent,
    PagoComponent,
    TerminosYCondicionesComponent,
    DevolucionesComponent,
    NoticiasComponent,
    SuscribirseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
