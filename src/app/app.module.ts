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
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
