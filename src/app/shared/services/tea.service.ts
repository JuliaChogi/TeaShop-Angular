import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TeaType} from "../../types/tea.type";


@Injectable({
  providedIn: 'root'
})
export class TeaService {
private url = 'https://testologia.ru/tea'
  constructor(private http: HttpClient) { }

  getTea(searchQuery?: string): Observable<TeaType[]> {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.set('search', searchQuery);
    }
    return this.http.get<TeaType[]>(this.url, { params });
  }
}
