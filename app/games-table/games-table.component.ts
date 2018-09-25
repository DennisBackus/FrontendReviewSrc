import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GameService } from 'src/service/game.service';
import { GameDTO } from '../../model/GameDTO';
import { gameTitleDTO } from 'src/model/gameTitleDTO';
import { SortService } from '../sort.service';
import { suggestTitleDTO } from '../../model/suggestTitleDTO';


@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css']
})
export class GamesTableComponent implements OnInit {

  constructor(private service: GameService,  private sortService: SortService ) { }

  gametitle = new FormControl('');
  loading: boolean;
  hidden: boolean;
  gameTitleDTO: gameTitleDTO = new gameTitleDTO;
  suggestTitleDTO: suggestTitleDTO = new suggestTitleDTO;
  sortVar: number;
  sortDirection: string;

  ngOnInit() {
    this.sortVar=0;
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

  findAllGames(){
    this.loading =true;
    this.hidden = true;
    this.service.findGames().subscribe(
      data => {
        this.gameTitleDTO = data;},
        err => this.loading = false  ,
        () => 
          this.loading = false  
         


    );

  }
  getTitles(inputS: string){
    this.service.getTitles(inputS).subscribe(
      data => { this.suggestTitleDTO =data;

      }
    );
  
  }
 selectedGame: GameDTO;

onSelect(game: GameDTO): void {
  this.selectedGame = game;
  this.hidden = false;
}

onSorted(choice: string){
  this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  if(this.sortVar==0){
      console.log(this.gameTitleDTO.foundGames);
    if(choice == 'gameTitle'){
      this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
        var x = a.gameTitle.toLowerCase();
       var y = b.gameTitle.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
      return 0;
    });
    console.log(this.gameTitleDTO.foundGames);
    this.sortVar=1;
    }
    else if(choice == 'releaseDate'){
     this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
      return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      });
      this.sortVar=1;
    }
    else if(choice == 'gameStudio'){
      this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
        var x = a.gameStudio.toLowerCase();
        var y = b.gameStudio.toLowerCase();
       if (x < y) {return -1;}
       if (x > y) {return 1;}
       return 0;
      });
       this.sortVar=1;

  }
  else if(choice == 'avgScore'){
    this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
      return b.avgScore - a.avgScore;
    });
    this.sortVar=1;
  }
  else if(choice == 'topScore'){
    this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
      return b.topScore - a.topScore;
    });
    this.sortVar=1;
  }
  else if(choice == 'lowestScore'){
    this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
      return b.lowestScore - a.lowestScore;
    });
    this.sortVar=1;
  }
  }


else if(this.sortVar = 1){
  console.log(this.gameTitleDTO.foundGames);
  if(choice == 'gameTitle'){
    this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
      var x = b.gameTitle.toLowerCase();
      var y = a.gameTitle.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    console.log(this.gameTitleDTO.foundGames);
    this.sortVar=0;
  }
  else if(choice == 'releaseDate'){
    this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
      return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
  });
  this.sortVar=0;
}
else if(choice == 'gameStudio'){
  this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
    var x = b.gameStudio.toLowerCase();
    var y = a.gameStudio.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
this.sortVar=0;
}
else if(choice == 'avgScore'){
  this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
    return a.avgScore - b.avgScore;
  });
  this.sortVar=0;
}
else if(choice == 'topScore'){
  this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
    return a.topScore - b.topScore;
  });
  this.sortVar=0;
}
else if(choice == 'lowestScore'){
  this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){
    return a.lowestScore - b.lowestScore;
  });
  this.sortVar=0;
}
}
//   console.log(this.gameTitleDTO.foundGames);
//   this.gameTitleDTO.foundGames =this.gameTitleDTO.foundGames.sort(function(a, b){return b.avgScore - a.avgScore});
// console.log(this.gameTitleDTO.foundGames);

}

}
