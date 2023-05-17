import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../interfaces/test';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  private apiURL: string = 'http://localhost:8081/api/controller/tests';

  constructor(private httpClient : HttpClient) { }

  searchTest(): Observable<Test[]>{
    return this.httpClient.get<Test[]>(this.apiURL)
    .pipe(
      catchError(error => of([]) )
    );
  }
}
