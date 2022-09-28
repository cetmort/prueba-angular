import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindComponent } from './components/modules/pokemon/find/find.component';
import { PlayComponent } from './components/modules/pokemon/play/play.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { NavComponent } from './components/modules/nav/nav.component';

const routes: Routes = [
  {
    path : 'buscar',
    component : FindComponent
  },
  {
    path : 'play',
    component : PlayComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
