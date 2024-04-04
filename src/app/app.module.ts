import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PublicidadComponent } from './components/publicidad/publicidad.component';
import { ProximamenteComponent } from './components/proximamente/proximamente.component';
import { AirmaxComponent } from './components/airmax/airmax.component';
import { EntrenamientoComponent } from './components/entrenamiento/entrenamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PublicidadComponent,
    ProximamenteComponent,
    AirmaxComponent,
    EntrenamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
