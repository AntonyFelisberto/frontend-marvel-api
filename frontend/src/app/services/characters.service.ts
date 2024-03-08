import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../models/Characters';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }
  
  public getCharacterById(id:String):Observable<Characters>{
    return this.httpClient.get<Characters>(`https://backend-marvel-api-9hny.vercel.app/marvel-api/${id}/${environment.api}`)
  }

  public getCharacters():Observable<Characters[]>{
    return this.httpClient.get<Characters[]>(`https://backend-marvel-api-9hny.vercel.app/marvel-api/${environment.api}}`)
  }

}
