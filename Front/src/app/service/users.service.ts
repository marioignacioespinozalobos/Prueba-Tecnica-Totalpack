import { inject, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Users } from '../model/users';
import { CollectionGeneric } from '../model/collectionGenerics';
import { Config } from '../config/config';
import { GenericService } from './generic.service';
import { Observable } from 'rxjs';
import { Ciudades } from '../model/ciudades';

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

  //Ciudades
  getUsuarioCiudades(id: any): Observable<Ciudades[]> {
    return this._httpClient.get<Ciudades[]>(`${this.baseUrl}user/GetUserCiudadesAll?id=`+ id);
  }

  addUserCiudades(ciudad: Ciudades): Observable<Object> {    
    return this._httpClient.post(`${this.baseUrl}user/AddUserCiudades`, ciudad);    
  }

  editUserCiudades(ciudad: Ciudades): Observable<Object> {   
    return this._httpClient.post(`${this.baseUrl}user/EditUserCiudades`, ciudad);    
  }
}
   
