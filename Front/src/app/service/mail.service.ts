import { inject, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Users } from '../model/users';
import { CollectionGeneric } from '../model/collectionGenerics';
import { Config } from '../config/config';
import { GenericService } from './generic.service';
import { Observable } from 'rxjs';
import { Ciudades } from '../model/direccion';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})


export class MailService  {


    envioMail(ca : string, cc : string, bcc : string, subject : string, body : string){

        return ok(200)
    }
    
}