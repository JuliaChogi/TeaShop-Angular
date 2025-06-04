import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TeaType} from "../types/tea.type";

@Injectable({
  providedIn: 'root'
})
export class TeaService {
private url = 'https://testologia.ru/tea'
  constructor(private http: HttpClient) { }

  getTea(): Observable<TeaType[]> {
  return this.http.get<TeaType[]>(this.url)
  }
}
