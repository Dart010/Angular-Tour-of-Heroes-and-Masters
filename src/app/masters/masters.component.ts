import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { Master } from '../master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {

  masters: Master[] = [];

  constructor(
    private masterService: MasterService, 
    private router: Router) { } 

  ngOnInit(): void {
    this.getMasters();
  }

  getMasters(): void { // metoda ca sa obtinem metoda getMasters din serviciul MasterService
    this.masters = this.masterService.getMasters()
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.masterService.addMaster(name);

    // dau refresh la componenta MastersComponent ca sa vad noul master adaugat
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/masters']);
    }); 

  }

  delete(master: Master): void {
    this.masters = this.masters.filter(m => m !== master);
    this.masterService.deleteMaster(master.id);
  }
}
