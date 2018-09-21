import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from '../service/game.service';
import { GamesTableComponent } from './games-table/games-table.component';
import { DannytestComponent } from './dannytest/dannytest.component';
import { LoadingComponent } from './loading/loading.component';
import { ReviewTableComponent } from './review-table/review-table.component';


@NgModule({
  declarations: [
    AppComponent,
    GamesTableComponent,

   
    GamesTableComponent,
    DannytestComponent,
    LoadingComponent,
    ReviewTableComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GameService,

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }