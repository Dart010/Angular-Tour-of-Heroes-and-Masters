import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
// import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { Master } from '../master';
import { MasterService } from '../master.service';

// import {FormControl} from '@angular/forms';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-master-search',
  templateUrl: './master-search.component.html',
  styleUrls: ['./master-search.component.css']
})
export class MasterSearchComponent implements OnInit {

  masters: Master[] = [];

  searchTerm!: string;

  constructor(private masterService: MasterService) {}

  ngOnInit() : void {}

  search() : void {
    // console.log(this.searchTerm);
    this.masters =  this.masterService.searchMaster(this.searchTerm);
  }
}
