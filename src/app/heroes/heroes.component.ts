import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  // selectedHero?: Hero;

  //inject the HeroService and defines heroService property
  constructor(private heroService: HeroService, private messageService: MessageService) { } 

  // constructor(private browserService: BrowserStorageService, private messageService: MessageService) { } 

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {   
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  // getHeroes(): void { // metoda ca sa obtinem metoda getHeroes din serviciul HeroService
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void { // metoda ca sa obtinem metoda getHeroes din serviciul HeroService
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
