import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CharacterInformationComponent } from './components/character-information/character-information.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomePageComponent,
    CharacterInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
