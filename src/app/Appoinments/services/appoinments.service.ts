import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appoinment } from '../interfaces/appoinments';
import { Observable, catchError, of } from 'rxjs';
import { Test } from 'src/app/c-tests/interfaces/test';
import { Affiliates } from 'src/app/Affiliates/interfaces/affiliate';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentsService {

  private apiURL: string = 'http://localhost:8081/api/controller';


  constructor(private httpClient : HttpClient) { }

  searchAppoinments(): Observable<Appoinment[]>{
    return this.httpClient.get<Appoinment[]>(`${this.apiURL}/appoinments`)
    .pipe(
      catchError(error => of([]) )
    );
  }


  searchTest(): Observable< Test[]>{
    return this.httpClient.get<Test[]>(`${this.apiURL}/tests`)
    .pipe(
      catchError(error => of([]) )
    );
  }

  searchAffiliate(): Observable< Affiliates[]>{
    return this.httpClient.get<Affiliates[]>(`${this.apiURL}/affiliates`)
    .pipe(
      catchError(error => of([]) )
    );
  }
}
