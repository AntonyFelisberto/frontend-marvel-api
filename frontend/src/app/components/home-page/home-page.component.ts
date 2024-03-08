import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/Characters';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  searchText:string = "";

  heroes!:Characters[];

  constructor(private characterService:CharactersService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(
      (characters:Characters[]) => {
        this.heroes = characters
      }
    );
  }

  updateName(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }
}
