import { Injectable } from '@angular/core';
import { suggestTitleDTO } from '../model/suggestTitleDTO'; // Dit is onze eigen model
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/Rx';
import { gameTitleDTO } from '../model/gameTitleDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class GameService {

  constructor(private http: HttpClient ) { }

  findGame(title:string): Observable<gameTitleDTO> {
    console.log(title);
    return this.http.get<gameTitleDTO>('http://localhost:9090/game/scrape/' +title);
  }

  findGames(): Observable<gameTitleDTO> {
    return this.http.get<gameTitleDTO>('http://localhost:9090/game/all');
  }

  getTitles(inputS: string): Observable<suggestTitleDTO> {
    return this.http.get<suggestTitleDTO>('http://localhost:9090/game/titlesuggest/' + inputS);
  }

}