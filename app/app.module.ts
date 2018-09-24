import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from '../service/game.service';
import { SortService} from './sort.service';
import { GamesTableComponent } from './games-table/games-table.component';
import { DannytestComponent } from './dannytest/dannytest.component';
import { ReviewTableComponent } from './review-table/review-table.component';
import { SortableColumnComponent } from './sortable-column/sortable-column.component';
import { SortableTableDirective } from './sortable-column/sortable-table-directive';


@NgModule({
  declarations: [
    AppComponent,
    GamesTableComponent,
    SortableTableDirective,
    GamesTableComponent,
    DannytestComponent,
    ReviewTableComponent,
    SortableColumnComponent,
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GameService,
    SortService

  ],
 
 
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }