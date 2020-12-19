import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent, PortfolioCardComponent, SkillsBarComponent, SocialLinksComponent } from './components';
import {
  PortfolioComponent,
  AlgorithmsComponent,
  LogsComponent,
  AboutComponent
} from './pages';
import { LimitPipe, SkillsFilterPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,

    // components
    NavBarComponent,
    PortfolioCardComponent,
    SkillsBarComponent,
    SocialLinksComponent,

    // pages
    PortfolioComponent,
    AlgorithmsComponent,
    LogsComponent,
    AboutComponent,

    // pipes
    LimitPipe,
    SkillsFilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
