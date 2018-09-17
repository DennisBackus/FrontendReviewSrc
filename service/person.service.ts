import { Injectable } from '@angular/core';
import { PersonDto } from '../model/PersonDto'; // Dit is onze eigen model
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PersonService {

  constructor(private http: HttpClient ) { }

  findPerson(id: number): Observable<PersonDto> {
    return this.http.get<PersonDto>('http://localhost:9090/api/person/' + id);
  }

  findPersons(): Observable<PersonDto[]> {
    return this.http.get<PersonDto[]>('http://localhost:9090/api/person/all');
  }

}