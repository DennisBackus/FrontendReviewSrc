import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from '../service/game.service';
import { PersonTableComponent } from './person-table/person-table.component';
import { GamesTableComponent } from './games-table/games-table.component';
import {PersonService } from '../service/person.service';
import { DannytestComponent } from './dannytest/dannytest.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonTableComponent,
    GamesTableComponent,
    DannytestComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GameService,
    PersonService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }