import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PortfolioComponent,
  AlgorithmsComponent,
  ArticlesComponent,
  AboutComponent
} from './pages';

const routes: Routes = [{
  path: '',
  component: PortfolioComponent
}, {
  path: 'algorithms',
  component: AlgorithmsComponent
}, {
  path: 'articles',
  component: ArticlesComponent
}, {
  path: 'about',
  component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
