import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../service/person.service';
import { PersonDto } from '../../model/PersonDto';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements OnInit {

  constructor(private service: PersonService) {  }

  persons: PersonDto[];

  ngOnInit() {
    this.service.findPersons().subscribe( data => {
      this.persons = data; 
    });
  }

}
