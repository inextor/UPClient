import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetEmpty } from '../models/GetEmpty';
import { Ecommerce } from '../models/RestModels';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public ecommerce:Ecommerce = GetEmpty.emptyEcommerce();

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }
}