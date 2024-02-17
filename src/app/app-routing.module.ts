// Importa los módulos necesarios de Angular
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

// Importa tus componentes que se utilizarán en las rutas
import { PorfolioComponent  } from '../page/porfolio/porfolio.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { ItemComponent } from './pages/item/item.component';


// Define las rutas de tu aplicación
const routes: Routes = [
  { path: 'inicio', component: PorfolioComponent }, 
  { path: 'about', component: SobremiComponent}, 
  { path: 'item', component: ItemComponent}, 
  { path: '**', pathMatch:'full', redirectTo: 'inicio'}, 
];

// Configura el módulo de enrutamiento
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }