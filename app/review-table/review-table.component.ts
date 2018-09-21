import { Component, OnInit, Input } from '@angular/core';
import { GameDTO } from '../../model/GameDTO';
@Component({
  selector: 'app-review-table',
  templateUrl: './review-table.component.html',
  styleUrls: ['./review-table.component.css']
})
export class ReviewTableComponent implements OnInit {
  @Input() game : GameDTO;
  constructor() { }

  ngOnInit() {
  }

}
