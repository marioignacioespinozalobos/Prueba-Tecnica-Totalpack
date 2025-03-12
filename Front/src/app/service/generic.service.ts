import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Users } from '../model/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GenericService<T> {

  constructor(
    protected _httpClient: HttpClient,
    @Inject("url") protected url: string
  ) { }
  
  getAll(): Observable<Users[]> {
    return this._httpClient.get<Users[]>(`${this.url}GetUserAll`);
  }

  addUser(user: Users): Observable<Users>{
    console.log(user);
    console.log(this.url);
    console.log(`${this.url}/AddUser`);
    return this._httpClient.post<Users>(`${this.url}/AddUser`, user);
  }




  getUrl(urlPagina: string){   
    return this._httpClient.get(`${this.url}GetUrlPagina?pag=` + urlPagina);
  }  
}

