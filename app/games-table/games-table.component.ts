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
  loading: string;
  gameTitleDTO: gameTitleDTO = new gameTitleDTO;
  ngOnInit() {
  }

  findGame(title : string){
    this.loading = 'isloading';
    this.service.findGame(title).subscribe(data => {
      this.gameTitleDTO = data;
    });


    if (this.gameTitleDTO.success == true) {
      this.loading = 'done!';
    }
    
    
    
  }

test(){
  this.banaan = "dit is nu een bananenstring";
}
}
