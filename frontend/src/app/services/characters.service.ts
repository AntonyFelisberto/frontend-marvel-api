import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../models/Characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }
  
  public getCharacterById(id:String):Observable<Characters>{
    return this.httpClient.get<Characters>(`https://backend-marvel-api-9hny.vercel.app/marvel-api/${id}/${process.env['PASSWORD_API']}`)
  }

  public getCharacters():Observable<Characters[]>{
    return this.httpClient.get<Characters[]>(`https://backend-marvel-api-9hny.vercel.app/marvel-api/${process.env['PASSWORD_API']}}`)
  }

}
