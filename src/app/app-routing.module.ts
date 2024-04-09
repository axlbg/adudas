import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdudasComponent } from './components/adudas/adudas/adudas.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'adudas', component: AdudasComponent },
  { path: 'adudas/:filter', component: AdudasComponent },
  { path: 'adudas/:filter/:filter2', component: AdudasComponent },
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
