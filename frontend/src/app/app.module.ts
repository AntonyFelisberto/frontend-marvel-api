import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CharacterInformationComponent } from './components/character-information/character-information.component';
import { FilterPipe } from './filters/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomePageComponent,
    CharacterInformationComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
