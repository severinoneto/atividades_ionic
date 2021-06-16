import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'jogos',
    loadChildren: () => import('./jogos/jogos/jogos.module').then( m => m.JogosPageModule)
  },
  {
    path: 'divertidos',
    loadChildren: () => import('./jogos/divertidos/divertidos.module').then( m => m.DivertidosPageModule)
  },
  {
    path: 'acao',
    loadChildren: () => import('./jogos/acao/acao.module').then( m => m.AcaoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
