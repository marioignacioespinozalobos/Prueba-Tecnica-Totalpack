import { inject, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Users } from '../model/users';
import { CollectionGeneric } from '../model/collectionGenerics';
import { Config } from '../config/config';
import { Observable } from 'rxjs';
import { Direccion } from '../model/direccion';

@Injectable({
  providedIn: 'root'
})

export class UsersService  {
  
  
  constructor(private http: HttpClient) { }

  private readonly _httpClient = inject(HttpClient);
  
  private baseUrl = Config.baseUrl;

  //usuarios

  getAll(): Observable<Users[]> {
    return this._httpClient.get<Users[]>(`${this.baseUrl}user/GetUserAll`);
  }

  getUserId(id: any): Observable<Users> {
   
    return this._httpClient.get<Users>(`${this.baseUrl}user/GetUserId?id=`+ id);
  }

  addUser(user: Users): Observable<Object> {    
    return this._httpClient.post(`${this.baseUrl}user/AddUser`, user);    
  }

  editUser(user: Users): Observable<Object> {   
    return this._httpClient.post(`${this.baseUrl}user/EditUser`, user);    
  }

  deleteUser(user: Users): Observable<Object> {   
    return this._httpClient.delete(`${this.baseUrl}user/DeleteUser`, { body: user });
  }

  //Direccion
  getUsuarioDirecciones(id: any): Observable<Direccion[]> {
    return this._httpClient.get<Direccion[]>(`${this.baseUrl}user/GetUserDireccionesAll?id=`+ id);
  }

  addUserDirecciones(ciudad: Direccion): Observable<Object> {    
    return this._httpClient.post(`${this.baseUrl}user/AddUserDirecciones`, ciudad);    
  }

  editUserDirecciones(ciudad: Direccion): Observable<Object> {   
    return this._httpClient.post(`${this.baseUrl}user/EditUserDirecciones`, ciudad);    
  }
}
   
