import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  // session: any;

  constructor() { }

  saveHeroes(){
    const localHeroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' } ];

    localStorage.setItem("heroes", JSON.stringify(localHeroes));
  }

  getHeroes() : Hero[]{
    var a = localStorage.getItem("heroes") as string;
    console.log(a);
    var b = JSON.parse(a);
    console.log(b);

    return JSON.parse(localStorage.getItem("heroes") as string);
  }

  public getData(key: string) {
    let data = localStorage.getItem("key")|| "";
    return data;
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
  
}
 