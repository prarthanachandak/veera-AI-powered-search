import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey = environment.apiKey;
  searchResults = new Subject();
  constructor(
    private http: HttpClient
  ) { }

  getResults(searchTerm: string): Observable<any> {
    return this.http.get(`https://google-search72.p.rapidapi.com/search?q=${searchTerm}&pagenumber=1&pageSize=10&autoCorrect=true`, {
      headers: {
        'X-RapidAPI-Key': 'cf22a56d85msha2eb035e206b50dp1aa8a6jsnb3d9e3216ad0' ,
      }
    });
  }

  passResults(results:any):void{
    this.searchResults.next(results)
  }

  getPassedResults():Observable<any> {
    return this.searchResults.asObservable();
  }
}
