import { Component, OnInit, HostListener } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero | undefined;

  onSelect(hero: Hero, clickEvent: MouseEvent): void {
    if(this.selectedHero === hero){
      this.selectedHero = undefined;
    }
    else{
      clickEvent.stopPropagation();
      this.selectedHero = hero;
    }
  }

  heroes = HEROES;

  constructor() {  }

  ngOnInit() {
  }

  @HostListener('document:click') clickout() {
    console.log(this.selectedHero);
    this.selectedHero = undefined;
  }
}