import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
    {
      path: 'tabs',
      component: HomePage,
      children: [
        {
          path: 'perfil',
          children: [
            {
              path: '',
              loadChildren: () => import('../tabs/perfil/perfil.module').then(m => m.PerfilPageModule)
            }
          ]
        },
        {
          path: 'conductores',
          children: [
            {
              path: '',
              loadChildren: () => import('../tabs/conductores/conductores.module').then(m => m.ConductoresPageModule)
            }
          ]
        },
        {
          path: 'mapa',
          children: [
            {
              path: '',
              loadChildren: () => import('../tabs/mapa/mapa.module').then(m => m.MapaPageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: '/tabs/perfil',
          pathMatch: 'full'
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/perfil',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
