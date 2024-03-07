import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/Characters';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  searchText:string = "";

  heroes:Characters[] = [
    {id:"1111",name:"awsd",description:"anunasdb skhwos shdawwo",thumbnail:"aaaaaaaaaaaaaa"},
    {id:"1222",name:"wasdww",description:"loremmmmmmmm",thumbnail:"dddddddddddddd"},
    {id:"3333",name:"arkham",description:"sekiro",thumbnail:"orkraimc"},
    {id:"4444",name:"awsdww",description:"meu deus",thumbnail:"madsauxc"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  updateName(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

}
