import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { IBook } from '../model/IBook';

@Injectable({
  providedIn: 'root'
})
export class BookAPIServiceService {

  private _url: string = "https://localhost:44373/api/Books";
  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]>{
    return this.http.get<IBook[]>(this._url);
  }
}

