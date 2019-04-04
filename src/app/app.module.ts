import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// import { HerosComponent } from './heros/heros.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    HeroesComponent,
    HeroDetailComponent,
    // HerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <- contains a list of external modules that the app needs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
