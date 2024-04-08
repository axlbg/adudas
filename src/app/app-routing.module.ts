import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdudasComponent } from './components/adudas/adudas/adudas.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'adudas', component: AdudasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
