import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PortfolioComponent,
  AlgorithmsComponent,
  LogsComponent,
  AboutComponent
} from './pages';

const routes: Routes = [{
  path: '',
  component: PortfolioComponent
}, {
  path: 'algorithms',
  component: AlgorithmsComponent
}, {
  path: 'logs',
  component: LogsComponent
}, {
  path: 'about',
  component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
