import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/Characters';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.css']
})
export class CharacterInformationComponent implements OnInit {

  hero!:Characters

  constructor(private characterService:CharactersService) { }

  ngOnInit(): void {
    this.characterService.getCharacterById("1").subscribe((hero:Characters) => {
      this.hero = hero
    });
  }

}
