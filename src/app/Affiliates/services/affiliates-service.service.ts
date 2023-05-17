import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Affiliates } from '../interfaces/affiliate';

@Injectable({
  providedIn: 'root'
})
export class AffiliatesServiceService {
  private apiURL: string = 'http://localhost:8081/api/controller/affiliates';


  constructor(private httpClient : HttpClient) { }

  searchAffiliates(): Observable<Affiliates[]>{
    return this.httpClient.get<Affiliates[]>(this.apiURL)
    .pipe(
      catchError(error => of([]) )
    );
  }
}
