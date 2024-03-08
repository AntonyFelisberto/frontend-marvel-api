import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../models/Characters';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }
  
  public getCharacterById(id:String):Observable<Characters>{
    return this.httpClient.get<Characters>(`https://backend-marvel-api-9hny.vercel.app/marvel-api/${id}/${environment.api}`).pipe(
      map(response => {
        const character: Characters = {
          id: response.id,
          name: response.name,
          description: response.description,
          thumbnail: response.thumbnail,
          comics:response.comics,
          series:response.series,
          stories:response.stories,
          events:response.events
        };
        return character;
      })
    );
  }

  public getCharacters(): Observable<Characters[]> {
    return this.httpClient.get<{ result: Characters[] }>(`https://backend-marvel-api-9hny.vercel.app/marvel-api/${environment.api}`).pipe(
      map(response => 
          response.result
        )
    );
  }

}
