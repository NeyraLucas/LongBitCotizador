import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseTypeProjectComponent } from './pages/home/choose-type-project/choose-type-project.component';
import { CotizadorComponent } from './pages/home/cotizador/cotizador.component';
import { HomeComponent } from './pages/home/home.component';
import { TipoDeProyectoComponent } from './pages/home/tipo-de-proyecto/tipo-de-proyecto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'Cotizador',
        pathMatch: 'full'
      },
      {
        path: 'Cotizador',
        component: CotizadorComponent
      },
      {
        path: 'Tipo',
        component: TipoDeProyectoComponent
      },
      {
        path: 'Cotizador/project/:id',
        component: ChooseTypeProjectComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
