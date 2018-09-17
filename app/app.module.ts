import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonTableComponent } from './person-table/person-table.component';
import { PersonService } from '../service/person.service';
import { GamesTableComponent } from './games-table/games-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonTableComponent,
    GamesTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
