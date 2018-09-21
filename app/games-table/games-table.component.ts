import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/service/game.service';
import { GameDTO } from '../../model/GameDTO';
import { gameTitleDTO } from 'src/model/gameTitleDTO';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css']
})
export class GamesTableComponent implements OnInit {

  constructor(private service: GameService) { }
  banaan: string;
  loading: boolean;
  hidden: boolean;
  gameTitleDTO: gameTitleDTO = new gameTitleDTO;
  ngOnInit() {
  }

  findGame(title : string){
    this.loading = true;
    this.hidden = true;
    this.service.findGame(title).subscribe(
      data => {
      this.gameTitleDTO = data;},
      err => this.loading = false  ,
      () => 
        this.loading = false  
       
      );
 }

 selectedGame: GameDTO;

onSelect(game: GameDTO): void {
  this.selectedGame = game;
  this.hidden = false;
}
test(){
  this.banaan = "dit is nu een bananenstring";
}
}
