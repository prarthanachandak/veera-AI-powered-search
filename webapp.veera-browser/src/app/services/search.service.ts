import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { GoogleResponse } from '../Response.model';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_KEY = environment.API_KEY;
  private CONTEXT_KEY = environment.CONTEXT_KEY;
  searchResults = new Subject();
  private url = 'http://127.0.0.1:7000/search/';
  constructor(
    private http: HttpClient
  ) { }

  getSearchData(searchTerm: string): Observable<GoogleResponse> {
    return this.http.get<GoogleResponse>(`${this.url}`, {
      params: {
        query: searchTerm
      }
    });
  }
}
