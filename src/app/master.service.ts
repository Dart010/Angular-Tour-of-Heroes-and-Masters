import { Injectable } from '@angular/core';
import { Master } from './master';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  masters = [
    { id: 1, name: 'Mara Jade' },
    { id: 2, name: 'Nomi Sunrider' },
    { id: 3, name: 'Shaak Ti' },
    { id: 4, name: 'Plo Koon' },
    { id: 5, name: 'Adi Gallia' },
    { id: 6, name: 'Kelleran Beq' },
    { id: 7, name: 'Agen Kolar' },
    { id: 8, name: 'Coleman Kcaj' },
    { id: 9, name: 'Depa Billaba' } ];

  constructor(private messageService: MessageService) { }

  getMasters() : Master[] {  
    // daca comentez linia urmatoare nu o sa se mai reincarce masters in local storage cand dau refresh 
    // localStorage.setItem("masters", JSON.stringify(this.masters)); 

    // daca folosesc conditia urmatoare atunci orice master il sterg va fi adaugat inapoi in masters dupa
    // ce se da refresh la pagina => functia de deleteMaster nu ar mai merge
    // if(localStorage["masters"] === null) {
    //   localStorage.setItem("masters", JSON.stringify(this.masters)); 
    // }
   
    if(localStorage.getItem("masters") === null) {  
      return [];
    }
    this.log('fetched masters');
    return JSON.parse(localStorage.getItem("masters") as string);
  }

  getMaster(id: number): Master {     // metoda pentru obtinerea id-ului unui master selectat
    var masters = JSON.parse(localStorage.getItem("masters") as string);
    const master = masters.find((m: Master) => m.id === id)!;
    console.log(master);
    this.log(`fetched master id=${id}`);
    return master;
  }

  addMaster(newName: string): Master[] {
    var masters = JSON.parse(localStorage.getItem("masters") as string);
    var newID = 0;

    var lastElem = masters[masters.length - 1];   // preluam ultimul element din masters
    if (lastElem == null){
      newID += 1;
    } else {
      newID = lastElem.id + 1;    // generam id-ul noului master pe baza id-ului utlimului element
    }
  
    // alta metoda cu getID (nu genereaza bine)
    // var newID = this.getID();

    masters.push({id: newID, name: newName});   // adaugam noul obiect in masters

    this.log(`added master w/ id=${newID}`);
    localStorage.setItem("masters", JSON.stringify(masters));
    return JSON.parse(localStorage.getItem("masters") as string);
  }

  // getID() : number {
  //   return this.masters.length > 0 ? Math.max(...this.masters.map(master => master.id)) + 1 : 11;
  // }

  deleteMaster(id: number): void {
    var masters = JSON.parse(localStorage.getItem("masters") as string);
    var newMasters: Master[] = [];

    // se poate si cu forEach
    // masters.forEach((element: Master) => {
    //   if (element.id != id) {
    //     newMasters.push(element);
    //   }
    // });

    newMasters = masters.filter((master: Master) => master.id !== id);

    this.log(`deleted master id=${id}`);
    localStorage.setItem("masters", JSON.stringify(newMasters));
  }

  updateMaster(master: Master): void {
    var masters = JSON.parse(localStorage.getItem("masters") as string);
    
    const masterIndex = masters.findIndex((m: Master) => m.id == master.id);
    if (masterIndex != -1) {
      masters[masterIndex].name = master.name;
    }
    localStorage.setItem("masters", JSON.stringify(masters));
  }

  searchMaster(term: string) : Master[] {
    const trimTerm = term.trim();
    if (!trimTerm) {
      return [];    // if not search term, return empty master array.
    }
    const masters = this.getMasters();
    const filteredM =  masters.filter((m : Master) => m.name.toLowerCase().includes(trimTerm));

    // daca lungimea array-ului e mai mare decat 0 atunci s-a gasit master (altfel nu s-a gasit)
    filteredM.length > 0 ? this.log(`found masters matching "${trimTerm}"`) : this.log(`no masters matching "${trimTerm}"`);

    return filteredM;
  }

  private log(message: string) {
    this.messageService.add(`MasterService: ${message}`);
  }
}
 