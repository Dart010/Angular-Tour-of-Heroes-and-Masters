import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Master } from '../master';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  masters: Master[] = [];

  constructor(
    private heroService: HeroService, 
    private masterService: MasterService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getMasters();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getMasters(): void{
    this.masters = this.masterService.getMasters().slice(1, 5);
  }
}