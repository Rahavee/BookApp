import { Injectable } from '@angular/core';
import{HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { IBook } from '../model/IBook';

@Injectable({
  providedIn: 'root'
})
export class BookAPIServiceService {

  private _url: string = "https://randomuser.me/api/?results=5&seed=befbe7091dbefaf2";
  constructor(private http: HttpClient) { }

  getBooks(): Observable<JSON>{
    return this.http.get<JSON>(this._url);
  }

  
}

